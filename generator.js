class generator {
    get size() {
        return 38;
    }

    get distance() {
        return 15;
    }

    get max() {
        return 10;
    }

    get types() {
        return ['circle'];
    }

    get colors() {
        return ['red', 'yellow', 'cyan', 'blue', 'magenta'];
    }

    createLayout() {
        const ti = Math.floor((Math.random() * this.types.length));

        let results = [];
        for (let i = 0; i <= Math.floor((Math.random() * this.max)); i++) {
            let e = document.createElementNS('http://www.w3.org/2000/svg', this.types[ti]);
            
            switch (ti) {
                case 0: {
                    e = circle.create(e, this.colors[Math.floor((Math.random() * this.colors.length))], i * (this.size + this.distance) * 2, 0, this.size);
                    break;
                }
            }
            
            results.push(e);
        }

        return results;
    }
}
