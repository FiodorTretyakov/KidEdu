document.addEventListener('DOMContentLoaded', function () {
    let m = new manager();
    m.getNew(new count(30, 30));
    m.getNew(new draw());
    m.getNew(new countAlive(1, 10));

    //disabled for now
    //m.getNew(new pattern(2, 4, 8));
});
