class count extends base {
    constructor(min, max) {
        super(max);

        this.max = max;
        this.min = min;
    }

    get limit() {
        return this.getRandomRange(this.min, this.max);
    }

    getRandomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}