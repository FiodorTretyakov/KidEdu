class base {
    constructor(s) {
        this.size = s;

        this.types = this.allTypes;
    }

    get allTypes() {
        return this.allFigures.concat(this.images);
    }

    get distance() {
        return Math.floor(this.size / 2);
    }

    get columns() {
        return Math.ceil(this.width / (this.size + this.distance));
    }

    get rows() {
        return Math.ceil(this.height / (this.size + this.distance));
    }

    get allFigures() {
        return this.figures.concat(this.addFigures);
    }


    get figures() {
        return ['circle', 'square', 'triangle', 'pentagon', 'diamond'];
    }

    get addFigures() {
        return ['line'];
    }

    get images() {
        return ['banana', 'panda', 'squirrel', 'penguin', 'apple', 'rabbit'];
    }

    get colors() {
        return ['Aqua', 'Aquamarine', 'Blue', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan',
            'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed',
            'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick',
            'ForestGreen', 'Fuchsia', 'Gold', 'GoldenRod', 'Green', 'GreenYellow', 'HotPink', 'IndianRed', 'LawnGreen', 'LightCoral', 'LightGray',
            'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Magenta', 'MediumAquaMarine',
            'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'OliveDrab', 'Orange',
            'OrangeRed', 'Orchid', 'PaleVioletRed', 'Peru', 'Red', 'RosyBrown', 'RoyalBlue', 'Salmon', 'SandyBrown', 'SeaGreen', 'SpringGreen', 'Tomato',
            'Turquoise', 'Violet', 'YellowGreen'];
    }

    get toFill() {
        return true;
    }

    createLayout() {
        let r = [];
        let tis = [];
        let cs = [];
        for (let i = 0; i < this.rows; i++) {
            let ti = this.getEntityIndexUniq(this.types, tis);
            
            if (tis.length + 1 === this.types.length) {
                tis = [];
            } else {
                tis.push(ti);
            }

            let c = this.colors[this.getEntityIndexUniq(this.colors, cs)];
            cs.push(c);

            for (let j = 0; j < this.limit; j++) {
                let e = this.getCell(ti, c, i, j);

                if (e) {
                    r.push(e);
                }
            }
        }

        return r;
    }

    getEntityIndexUniq(a, cs) {
        let c;
        do {
            c = this.getEntityIndex(a);
        } while (cs.indexOf(c) !== -1)

        return c;
    }

    getEntityIndex(a) {
        return Math.floor((Math.random() * a.length));
    }

    getCell(ti, c, i, j) {
        let b = (this.size + this.distance) * 2;
        let x = j * b;
        let y = i * b;

        if (x + this.size * 2 > this.width || y + this.size * 2 > this.height) {
             return;
        }

        let e;
        switch (ti) {
            case 0: {
                e = new circle(c, this.toFill, x + this.size, y + this.size, this.size);
                break;
            }
            case 1: {
                e = new rectangle(c, this.toFill, x, y, this.size * 2);
                break;
            }
            case 2: {
                e = new polygon(c, this.toFill, [new point(x, y + this.size * 2), new point(x + this.size, y), new point(x + this.size * 2, y + this.size * 2)]);
                break;
            }
            case 3: {
                e = new polygon(c, this.toFill, [
                    new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size * 2, y + this.size),
                    new point(x + this.size, y), new point(x, y + this.size)]);
                break;
            }
            case 4: {
                e = new polygon(c, this.toFill, [
                    new point(x, y + this.size), new point(x + this.size, y + this.size * 2), new point(x + this.size * 2, y + this.size),
                    new point(x + this.size, y)]);
                break;
            }
            case 5: {
                e = new line(c, this.toFill, x + this.size, y, x + this.size, y + this.size * 2);
                break;
            }
        }

        if (ti >= this.allFigures.length) {
            e = new image(this.types[ti], this.size, x, y);
        }

        return e;
    }
}