class ellipse extends shape {
    constructor(c, cx, cy, rx, ry) {
        let e = super('ellipse', c);
        e.setAttribute('cx', cx);
        e.setAttribute('cy', cy);
        e.setAttribute('rx', rx);
        e.setAttribute('ry', ry);

        return e;
    }
}