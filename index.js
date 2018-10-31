document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(30, 16, 12));
    m.getNew(new draw(60));
});