class draw extends base {
    constructor(s) {
        super(s);

        this.types = this.allFigures;
    }

    get limit() {
        return this.columns;
    }

    get toFill() {
        return false;
    }
}