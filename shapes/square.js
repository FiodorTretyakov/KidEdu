class square {
    static create(c, x, y, r) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        e.setAttributeNS(null, 'width', r);
        e.setAttributeNS(null, 'height', r);
        e.setAttributeNS(null, 'x', x);
        e.setAttributeNS(null, 'y', y);
        e.setAttributeNS(null, 'fill', c);

        return e;
    }
}