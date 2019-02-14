class draw extends base {
    constructor() {
        super();

        this.types = this.allFigures;
    }

    get limit() {
        return this.columns;
    }

    get toFill() {
        return false;
    }
}