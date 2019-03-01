class polyline extends shape {
    constructor(c, p) {
        let e = super('polyline', c);
        e.setAttribute('points', p.reduce((a, v) => a + ' ' + v.x + ',' + v.y, ''));

        return e;
    }
}