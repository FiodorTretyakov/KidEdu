document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(30, 17, 14));
    m.getNew(new draw(60));
    m.getNew(new pattern(60));
});