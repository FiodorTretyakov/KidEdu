class generator {
    get types() {
        return ['circle'];
    }

    get colors() {
        return ['red', 'yellow', 'cyan', 'blue', 'magenta'];
    }

    createElement(t, c, x, y, r) {
        let count = Math.floor((Math.random() * 10) + 1);

        let e = document.createElementNS('http://www.w3.org/2000/svg', t);
        e.setAttributeNS(null, 'r', r);
        e.setAttributeNS(null, 'cx', x);
        e.setAttributeNS(null, 'cy', y);
        e.setAttributeNS(null, 'fill', c);

        return e;
    }

    createLayout() {
        const type = this.types[Math.floor((Math.random() * this.types.length))];

        let results = [];
        const r = 50;
        for (let i = 0; i <= Math.floor((Math.random() * 10)); i++) {
            results.push(this.createElement(type, this.colors[Math.floor((Math.random() * this.colors.length))], r, (i + 1) * r * 2, r));
        }

        return results;
    }
}
