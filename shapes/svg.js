class svg {
    constructor() {
        let e = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        e.setAttribute('width', svg.width);
        e.setAttribute('height', svg.height);

        return e;
    }

    static get width() {
        return 1619;
    }

    static get height() {
        return 1071;
    }
}