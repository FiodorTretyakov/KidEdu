class pattern extends count {
    constructor(s) {
        super(s, 8, 5);
    }

    get patterns() {
        return ['1-to-1 color']; //, '1-to-1 shape'
    }
    
    createLayout() {
        let r = [];
        for (let i = 0; i < this.rows; i++) {
            let p = Math.floor(Math.random() * this.patterns.length);

            let cs = [];
            let ss = [];
            switch (p) {
                case 0: {
                    let c = this.getColorIndexNonUniq();
                    cs.push(c);
                    cs.push(this.getColorIndex(cs));

                    this.types = this.figures;
                    ss.push(Math.floor((Math.random() * this.types.length))); 
                    break;
                }
                case 1: {
                    break;
                }
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
}