document.addEventListener('DOMContentLoaded', function (e) {
    let aCount = new svg();
    document.body.appendChild(aCount);
    new count(30, aCount.clientWidth, aCount.clientHeight, 16, 12).createLayout().forEach(e => {
        aCount.appendChild(e);
    });

});