class rectangle extends shape {
    constructor(c, tf, x, y, r) {
        let e = super('rect', c, tf);
        e.setAttribute('width', r);
        e.setAttribute('height', r);
        e.setAttribute('x', x);
        e.setAttribute('y', y);

        return e;
    }
}