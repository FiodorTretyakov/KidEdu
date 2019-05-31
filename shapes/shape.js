class shape {
    constructor(t, c, tf, is) {
        if (new.target === shape) {
            throw new TypeError("Cannot construct shape instances directly");
        }
        let e = document.createElementNS('http://www.w3.org/2000/svg', t);

        if (c) {
            if (tf) {
                e.setAttribute('fill', c);
            } else {
                e.setAttribute('fill', 'transparent');
                e.setAttribute('stroke', c);
                e.setAttribute('stroke-width', 5);

                if (!is) {
                    e.setAttribute('stroke-dasharray', 15);
                }
            }
        }

        return e;
    }
}