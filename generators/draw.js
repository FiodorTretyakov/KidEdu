class draw extends base {
    constructor() {
        super(8);

        this.types = this.allFigures;
    }

    get limit() {
        return this.columns;
    }

    get toFill() {
        return false;
    }
}