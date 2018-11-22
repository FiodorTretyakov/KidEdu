class pattern extends count {
    constructor(s) {
        super(s, 8, 5);

        this.colors = this.simpleColors;
        this.types = this.basicFiguresAndImages
    }

    createLayout() {
        let r = [];
        for (let i = 0; i < this.rows; i++) {
            let t =  Math.floor((Math.random() * 2));

            let cs = [];
            let ss = [];

            let d = {};
            if (t == 0) {
                d.a = cs;
                this.types = this.figures;
                d.b = ss;
            } else {
                d.a = ss;
                this.types = this.basicFiguresAndImages;
                d.b = cs;
            }

            for (let j = 0; j <= Math.ceil((Math.random() * this.limit - 1)) + 1; j++) {
                d = this.getPattern(j, t, d.a, d.b);
            }


            for (let j = 0; j < this.limit; j++) {
                let e = this.getCell(ss[j % ss.length], this.colors[cs[j % cs.length]], i, j);

                if (e) {
                    r.push(e);
                }
            }
        }

        return r;
    }

    getPattern(n, t, a, b) {
        let aD, bD;
        if (t == 0) {
            aD = this.colors;
            bD = this.types;    
        } else {
            aD = this.types;
            bD = this.colors;

            b.push(this.getEntityIndex(bD));
        }

        a.push(this.getEntityIndex(aD, a));
        if (n == 0) {
            b.push(this.getEntityIndex(bD));
        }

        return { a: a, b: b };
    }
}