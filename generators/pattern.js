class pattern extends count {
    constructor(s) {
        super(s, 8, 5);
    }

    get patterns() {
        return ['1-to-1 color', '1-to-1 shape'];
    }
    
    createLayout() {
        let r = [];
        for (let i = 0; i < this.rows; i++) {
            let p = this.getEntityIndex(this.patterns);

            let cs = [this.getEntityIndex(this.colors)];
            let ss = [];
            switch (p) {
                case 0: {
                    cs.push(this.getEntityIndexUniq(this.colors, cs));

                    this.types = this.figures;
                    ss.push(this.getEntityIndex(this.types)); 
                    break;
                }
                case 1: {
                    this.types = this.allTypes;
                    ss.push(this.getEntityIndex(this.types));
                    ss.push(this.getEntityIndexUniq(this.types, ss));  
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