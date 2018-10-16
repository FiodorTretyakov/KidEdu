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
        return ['circle'];
    }

    get colors() {
        return ['red', 'yellow', 'cyan', 'blue', 'magenta'];
    }

    createLayout() {
        let results = [];
        for (let i = 0; i < this.rows; i++) {
            let ti = Math.floor((Math.random() * this.types.length));

            for (let j = 0; j <= Math.floor((Math.random() * this.columns)); j++) {
                let e = document.createElementNS('http://www.w3.org/2000/svg', this.types[ti]);

                switch (ti) {
                    case 0: {
                        e = circle.create(e, this.colors[Math.floor((Math.random() * this.colors.length))], j * (this.size + this.distance) * 2, i * (this.size + this.distance) * 2, this.size);
                        break;
                    }
                }

                results.push(e);
            }
        }

        return results;
    }
}
