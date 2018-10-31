class image extends shape {
    constructor(t, s, x, y) {
        let e = super('image');

        const size = s * 2;

        e.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'images\\' + t + '.svg');
        e.setAttribute('width', size);
        e.setAttribute('height', size);
        e.setAttribute('x', x);
        e.setAttribute('y', y);

        return e;
    }
}