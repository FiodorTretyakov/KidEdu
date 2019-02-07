document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(18, 22));
    m.getNew(new draw());
    m.getNew(new pattern());
});
