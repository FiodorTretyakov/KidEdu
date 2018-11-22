document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(20, 14));
    m.getNew(new draw());
    m.getNew(new pattern());
});