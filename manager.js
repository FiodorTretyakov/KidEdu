class manager {
    getNew(s) {
        let d = new svg();
        document.body.appendChild(d);

        s.width = d.clientWidth;
        s.height = d.clientHeight;
        s.createLayout().forEach(e => {
            d.appendChild(e);
        });
    }
}