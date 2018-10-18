class circle extends shape {
    constructor(c, x, y, r) {
        super('circle', c);
        this.e.setAttribute('r', r);
        this.e.setAttribute('cx', x);
        this.e.setAttribute('cy', y);
    }
}