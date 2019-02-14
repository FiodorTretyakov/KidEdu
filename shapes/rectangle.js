class rectangle extends shape {
    constructor(c, tf, x, y, w, h) {
        let e = super('rect', c, tf);
        e.setAttribute('width', w);
        e.setAttribute('height', h);
        e.setAttribute('x', x);
        e.setAttribute('y', y);

        return e;
    }
}