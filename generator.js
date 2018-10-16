class generator {
    get size() {
        return 38;
    }

    get distance() {
        return 15;
    }

    get columns() {
        return 10;
    }

    get rows() {
        return 6;
    }

    get types() {
        return ['circle', 'square', 'triangle', 'pentagon'];
    }

    get colors() {
        return ['red', 'yellow', 'cyan', 'blue', 'magenta'];
    }

    createLayout() {
        let results = [];
        for (let i = 0; i < this.rows; i++) {
            let ti = Math.floor((Math.random() * this.types.length));

            for (let j = 0; j <= Math.floor((Math.random() * this.columns)); j++) {
                let c = this.colors[Math.floor((Math.random() * this.colors.length))];
                let b = (this.size + this.distance) * 2;
                let x = j * b;
                let y = i * b;

                let e;
                switch (ti) {
                    case 0: {
                        e = new circle(c, x, y, this.size);
                        break;
                    }
                    case 1: {
                        e = new square(c,
                            x - this.size,
                            y - this.size,
                            this.size * 2);
                        break;
                    }
                    case 2: {
                        e = new polygon(c, [
                            new point(x - this.size, y + this.size),
                            new point(x, y - this.size),
                            new point(x + this.size, y + this.size)]);
                        break;
                    }
                    case 3: {
                        e = new polygon(c, [
                            new point(x - this.size / 2, y + this.size),
                            new point(x + this.size / 2, y + this.size),
                            new point(x + this.size, y),
                            new point(x, y - this.size),
                            new point(x - this.size, y)]);
                        break;
                    }
                }

                results.push(e.element);
            }
        }

        return results;
    }
}
