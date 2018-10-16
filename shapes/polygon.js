class polygon extends shape {
    constructor(c, p) {
        super('polygon', c);
        this.e.setAttributeNS(null, 'points',
            p.reduce((a, v) => a + ' ' + v.x + ',' + v.y, ''));
    }
}