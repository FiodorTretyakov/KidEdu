document.addEventListener('DOMContentLoaded', function (e) {
    const area = document.getElementById('area');
    new generator(19, area.clientWidth, area.clientHeight, 16, 12).createLayout().forEach(e => {
        area.appendChild(e);
    });

});