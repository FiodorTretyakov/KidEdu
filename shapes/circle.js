class circle {
    static create(c, x, y, r) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        e.setAttributeNS(null, 'r', r);
        e.setAttributeNS(null, 'cx', x);
        e.setAttributeNS(null, 'cy', y);
        e.setAttributeNS(null, 'fill', c);

        return e;
    }
}