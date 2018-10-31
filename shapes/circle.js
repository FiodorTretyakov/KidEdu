class circle extends shape {
    constructor(c, tf, x, y, r) {
        let e = super('circle', c, tf);
        e.setAttribute('r', r);
        e.setAttribute('cx', x);
        e.setAttribute('cy', y);

        return e;
    }
}