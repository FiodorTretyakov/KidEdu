class polygon extends shape {
    constructor(c, p) {
        super('polygon', c);
        this.e.setAttribute('points', p.reduce((a, v) => a + ' ' + v.x + ',' + v.y, ''));
    }
}