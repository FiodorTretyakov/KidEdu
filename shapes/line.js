class line extends shape {
    constructor(c, is, x1, y1, x2, y2) {
        let e = super('line', c, false, is);
        e.setAttribute('x1', x1);
        e.setAttribute('y1', y1);
        e.setAttribute('x2', x2);
        e.setAttribute('y2', y2);

        return e;
    }
}