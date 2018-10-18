class rectangle extends shape {
    constructor(c, x, y, r) {
        super('rect', c);
        this.e.setAttribute('width', r);
        this.e.setAttribute('height', r);
        this.e.setAttribute('x', x);
        this.e.setAttribute('y', y);
    }
}