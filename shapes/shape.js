class shape {
    constructor(t, c) {
        this.e = document.createElementNS('http://www.w3.org/2000/svg', t);

        if (c) {
            this.e.setAttribute('fill', c);
        }
    }

    get element() {
        return this.e;
    }
}