class polygon extends shape {
    constructor(c, p) {
        let e = super('polygon', c);
        e.setAttribute('points', p.reduce((a, v) => a + ' ' + v.x + ',' + v.y, ''));

        return e;
    }
}