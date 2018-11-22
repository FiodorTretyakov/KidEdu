class count extends base {
    constructor(max, min) {
        super(Math.floor(svg.width / max / 3));
        this.max = max;
        this.min = min;
    }

    get limit() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}