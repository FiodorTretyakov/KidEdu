document.addEventListener('DOMContentLoaded', function (e) {
    let m = new manager();
    m.getNew(new count(28, 30));
    m.getNew(new draw());
    
    //disabled for now
    //m.getNew(new pattern());
});
