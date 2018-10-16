class circle extends shape {
    constructor(c, x, y, r) {
        super('circle', c);
        this.e.setAttributeNS(null, 'r', r);
        this.e.setAttributeNS(null, 'cx', x);
        this.e.setAttributeNS(null, 'cy', y);
    }
}