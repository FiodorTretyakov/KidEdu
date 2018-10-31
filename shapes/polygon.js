class polygon extends shape {
    constructor(c, tf, p) {
        let e = super('polygon', c, tf);
        e.setAttribute('points', p.reduce((a, v) => a + ' ' + v.x + ',' + v.y, ''));

        return e;
    }
}