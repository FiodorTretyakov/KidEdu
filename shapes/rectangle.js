class rectangle extends shape {
    constructor(c, x, y, r) {
        super('rect', c);
        this.e.setAttributeNS(null, 'width', r);
        this.e.setAttributeNS(null, 'height', r);
        this.e.setAttributeNS(null, 'x', x);
        this.e.setAttributeNS(null, 'y', y);
    }
}