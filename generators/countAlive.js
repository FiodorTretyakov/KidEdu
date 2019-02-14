class countAlive extends count {
    constructor(min, max) {
        super(min, max);

        this.types = this.liveImages;
    }
}