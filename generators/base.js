class base {
    constructor(max) {
        if (new.target === base) {
            throw new TypeError("Cannot construct base instances directly");
        }
        this.size = Math.floor(svg.width / max / 3);

        this.types = this.allTypes;
        this.colors = this.simpleColors.concat(this.nextColors);
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

    get allTypes() {
        return this.allFigures.concat(this.images);
    }

    get allFigures() {
        return this.figures.concat(this.addFigures);
    }

    get figures() {
        return ['circle', 'square', 'triangle', 'pentagon', 'diamond', 'rectangle'];
    }

    get addFigures() {
        return ['line'];
    }

    get digits() {
        return ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    }

    get basicFiguresAndImages() {
        return this.figures.concat(this.images);
    }

    get images() {
        return ['banana', 'apple'].concat(this.liveImages);
    }

    get liveImages() {
        return ['panda', 'squirrel', 'penguin', 'rabbit', 'boy', 'girl'];
    }

    get simpleColors() {
        return ['Blue', 'Brown', 'Cyan', 'Green', 'Orange', 'Red', 'DarkGray', 'Violet']
    }

    get nextColors() {
        return ['Aqua', 'Gold', 'Aquamarine', , 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson',
            'DarkCyan', 'DarkGoldenRod', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed',
            'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DodgerBlue', 'FireBrick',
            'ForestGreen', 'Fuchsia', 'GoldenRod', 'GreenYellow', 'HotPink', 'IndianRed', 'LawnGreen', 'LightCoral', 'LightGray',
            'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSteelBlue', 'Lime', 'LimeGreen', 'Magenta', 'MediumAquaMarine',
            'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'OliveDrab',
            'OrangeRed', 'Orchid', 'PaleVioletRed', 'Peru', 'RosyBrown', 'RoyalBlue', 'Salmon', 'SandyBrown', 'SeaGreen', 'SpringGreen', 'Tomato',
            'Turquoise', , 'YellowGreen'
        ]
    }

    get toFill() {
        return true;
    }

    createLayout() {
        let r = [];
        let tis = [];
        let cs = [];
        for (let i = 0; i < this.rows; i++) {
            let ti = this.getEntityIndex(this.types, tis);

            if (tis.length + 1 === this.types.length) {
                tis = [];
            } else {
                tis.push(ti);
            }

            let c = this.colors[this.getEntityIndex(this.colors, cs)];
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

    getEntityIndex(a, cs) {
        let c;
        do {
            c = this.getEntityIndexNonUniq(a);
        } while (cs && cs.indexOf(c) !== -1)

        return c;
    }

    getEntityIndexNonUniq(a) {
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

        let ind = this.types[ti];
        switch (ind) {
            case 'circle':
                {
                    e = new circle(c, this.toFill, x + this.size, y + this.size, this.size);
                    break;
                }
            case 'square':
                {
                    e = new rectangle(c, this.toFill, x, y, this.size * 2, this.size * 2);
                    break;
                }
            case 'triangle':
                {
                    e = new polygon(c, this.toFill, [new point(x, y + this.size * 2), new point(x + this.size, y), new point(x + this.size * 2, y + this.size * 2)]);
                    break;
                }
            case 'pentagon':
                {
                    e = new polygon(c, this.toFill, [
                        new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size * 2, y + this.size),
                        new point(x + this.size, y), new point(x, y + this.size)
                    ]);
                    break;
                }
            case 'diamond':
                {
                    e = new polygon(c, this.toFill, [
                        new point(x, y + this.size), new point(x + this.size, y + this.size * 2), new point(x + this.size * 2, y + this.size),
                        new point(x + this.size, y)
                    ]);
                    break;
                }
            case 'line':
                {
                    e = new line(c, this.toFill, x + this.size, y, x + this.size, y + this.size * 2);
                    break;
                }
            case 'rectangle':
                {
                    e = new rectangle(c, this.toFill, x, y + this.size, this.size * 2, this.size);
                    break;
                }
            case '0':
                {
                    e = new ellipse(c, x + this.size, y + this.size, this.size / 2, this.size);
                    break;
                }
            case '1':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y + this.size), new point(x + this.size, y), new point(x + this.size, y + this.size * 2)
                    ]);
                    break;
                }
            case '2':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y), new point(x + this.size * 3 / 2, y), new point(x + this.size * 3 / 2, y + this.size),
                        new point(x + this.size / 2, y + this.size), new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2)
                    ]);
                    break;
                }
            case '3':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y), new point(x + this.size * 3 / 2, y), new point(x + this.size * 3 / 2, y + this.size),
                        new point(x + this.size / 2, y + this.size), new point(x + this.size * 3 / 2, y + this.size),
                        new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size / 2, y + this.size * 2)
                    ]);
                    break;
                }
            case '4':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size), new point(x + this.size * 3 / 2, y + this.size),
                        new point(x + this.size * 3 / 2, y), new point(x + this.size * 3 / 2, y + this.size * 2)
                    ]);
                    break;
                }
            case '5':
                {
                    e = new polyline(c, [
                        new point(x + this.size * 3 / 2, y), new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size),
                        new point(x + this.size * 3 / 2, y + this.size), new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size / 2, y + this.size * 2)
                    ]);
                    break;
                }
            case '6':
                {
                    e = new polyline(c, [
                        new point(x + this.size * 3 / 2, y), new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size * 2),
                        new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size), new point(x + this.size / 2, y + this.size)
                    ]);
                    break;
                }
            case '7':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y), new point(x + this.size * 3 / 2, y), new point(x + this.size * 3 / 2, y + this.size * 2)
                    ]);
                    break;
                }
            case '8':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2),
                        new point(x + this.size * 3 / 2, y), new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size),
                        new point(x + this.size * 3 / 2, y + this.size)
                    ]);
                    break;
                }
            case '9':
                {
                    e = new polyline(c, [
                        new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2),
                        new point(x + this.size * 3 / 2, y), new point(x + this.size / 2, y), new point(x + this.size / 2, y + this.size),
                        new point(x + this.size * 3 / 2, y + this.size)
                    ]);
                    break;
                }
            default:
                {
                    e = new image(this.types[ti], this.size, x, y);
                    break;
                }
        }

        return e;
    }
}