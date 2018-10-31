class base {
    constructor(s, w, h) {
        this.size = s;
        this.width = w;
        this.height = h;

        this.types = this.figures;
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

    get figures() {
        return ['circle', 'square', 'triangle', 'pentagon'];
    }

    get images() {
        return ['banana', 'panda', 'squirrel'];
    }

    get colors() {
        return ['Aqua', 'Aquamarine', 'Blue', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse',
            'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan',
            'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen',
            'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid',
            'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray',
            'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray',
            'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gold'];
    }

    createLayout() {
        let results = [];
        for (let i = 0; i < this.rows; i++) {
            let ti = Math.floor((Math.random() * this.types.length));
            let c = this.colors[Math.floor((Math.random() * this.colors.length))];

            for (let j = 0; j < this.limit; j++) {
                let b = (this.size + this.distance) * 2;
                let x = j * b;
                let y = i * b;

                if (x + this.size * 2 > this.width || y + this.size * 2 > this.height) {
                    break;
                }

                let e;
                switch (ti) {
                    case 0: {
                        e = new circle(c, x + this.size, y + this.size, this.size);
                        break;
                    }
                    case 1: {
                        e = new rectangle(c,
                            x,
                            y,
                            this.size * 2);
                        break;
                    }
                    case 2: {
                        e = new polygon(c, [
                            new point(x, y + this.size * 2),
                            new point(x + this.size, y),
                            new point(x + this.size * 2, y + this.size * 2)]);
                        break;
                    }
                    case 3: {
                        e = new polygon(c, [
                            new point(x + this.size / 2, y + this.size * 2), new point(x + this.size * 3 / 2, y + this.size * 2), new point(x + this.size * 2, y + this.size),
                            new point(x + this.size, y), new point(x, y + this.size)]);
                        break;
                    }
                }

                if (ti >= 4) {
                    e = new image(this.types[ti], this.size, x, y);
                }

                results.push(e.element);
            }
        }

        return results;
    }
}
