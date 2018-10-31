class shape {
    constructor(t, c) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', t);

        if (c) {
            e.setAttribute('fill', c);
        }

        return e;
    }
}