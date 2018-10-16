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
        return ['circle', 'square'];
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
                let x = j * (this.size + this.distance) * 2;
                let y = i * (this.size + this.distance) * 2;
                
                let e;
                switch (ti) {
                    case 0: {
                        e = circle.create(c, x, y, this.size);
                        break;
                    }
                    case 1: {
                        e = square.create(c, x - this.size, y - this.size, this.size * 2);
                        break;
                    }
                }

                results.push(e);
            }
        }

        return results;
    }
}
