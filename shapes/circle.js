class circle {
    static create(e, c, x, y, r) {
        e.setAttributeNS(null, 'r', r);
        e.setAttributeNS(null, 'cx', x);
        e.setAttributeNS(null, 'cy', y);
        e.setAttributeNS(null, 'fill', c);

        return e;
    }
}