class image extends shape {
    constructor(t, s, x, y) {
        super('image');

        const size = s * 2;

        this.e.setAttributeNS('http://www.w3.org/1999/xlink', 'href', 'images\\' + t + '.svg');
        this.e.setAttribute('width', size);
        this.e.setAttribute('height', size);
        this.e.setAttribute('x', x);
        this.e.setAttribute('y', y);
    }
}