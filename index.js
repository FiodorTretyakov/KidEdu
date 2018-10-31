document.addEventListener('DOMContentLoaded', function (e) {
    let aCount = new svg();
    document.body.appendChild(aCount);
    new count(30, aCount.clientWidth, aCount.clientHeight, 16, 12).createLayout().forEach(e => {
        aCount.appendChild(e);
    });

    let aDraw = new svg();
    document.body.appendChild(aDraw);
    new draw(60, aDraw.clientWidth, aDraw.clientHeight).createLayout().forEach(e => {
        aDraw.appendChild(e);
    });
});