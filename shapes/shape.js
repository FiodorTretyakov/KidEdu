class shape {
    constructor(t, c, tf) {
        let e = document.createElementNS('http://www.w3.org/2000/svg', t);

        if (c) {
            if (tf) {
                e.setAttribute('fill', c);
            } else {
                e.setAttribute('fill', 'transparent');
                e.setAttribute('stroke', c);
                e.setAttribute('stroke-width', 5);
                e.setAttribute('stroke-dasharray', 15);
            }
        }

        return e;
    }
}