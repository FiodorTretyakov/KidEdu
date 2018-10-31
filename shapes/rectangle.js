class rectangle extends shape {
    constructor(c, x, y, r) {
        let e = super('rect', c);
        e.setAttribute('width', r);
        e.setAttribute('height', r);
        e.setAttribute('x', x);
        e.setAttribute('y', y);

        return e;
    }
}