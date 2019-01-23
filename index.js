document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(22, 18));
    m.getNew(new draw());
    m.getNew(new pattern());
});
