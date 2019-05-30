document.addEventListener('DOMContentLoaded', function () {
    let m = new manager();
    m.getNew(new count(1, 20));
    m.getNew(new draw());
    m.getNew(new drawDigits());
    m.getNew(new countAlive(1, 10));
    m.getNew(new pattern(2, 4, 8));
});
