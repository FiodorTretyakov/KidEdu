class shape {
    constructor(t, c) {
        this.e = document.createElementNS('http://www.w3.org/2000/svg', t);
        this.e.setAttributeNS(null, 'fill', c);
    }

    get element() {
        return this.e;
    }
}