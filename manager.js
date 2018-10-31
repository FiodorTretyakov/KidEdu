class manager {
    getNew(s) {
        let d = new svg();
        document.body.appendChild(d);
        s.createLayout().forEach(e => {
            d.appendChild(e);
        });
    }
}