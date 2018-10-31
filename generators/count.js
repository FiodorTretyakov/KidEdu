class count extends base {
    constructor(s, w, h, max, min) {
        super(s, w, h);
        this.max = max;
        this.min = min;

        this.types = this.types.concat(this.images);
    }

    get limit() {
        return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
}