class base {
    constructor(s, w, h) {
        this.size = s;
        this.width = w;
        this.height = h;
    }

    get distance() {
        return Math.floor(this.size / 2);
    }

    get columns() {
        return Math.ceil(this.width / (this.size + this.distance));
    }

    get rows() {
        return Math.ceil(this.height / (this.size + this.distance));
    }

    get types() {
        return ['circle', 'square', 'triangle', 'pentagon', 'banana', 'panda', 'squirrel'];
    }

    get colors() {
        return ['Aqua', 'Aquamarine', 'Blue', 'Brown', 'BurlyWood', 'CadetBlue', 'Chartreuse',
            'Chocolate', 'Coral', 'CornflowerBlue', 'Crimson', 'Cyan',
            'DarkCyan', 'DarkGoldenRod', 'DarkGray', 'DarkGreen',
            'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'DarkOrange', 'DarkOrchid',
            'DarkRed', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray',
            'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray',
            'DodgerBlue', 'FireBrick', 'ForestGreen', 'Fuchsia', 'Gold'];
    }
}
