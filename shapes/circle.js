class circle extends shape {
    constructor(c, x, y, r) {
        let e = super('circle', c);
        e.setAttribute('r', r);
        e.setAttribute('cx', x);
        e.setAttribute('cy', y);

        return e;
    }
}