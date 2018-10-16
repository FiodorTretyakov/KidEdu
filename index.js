document.addEventListener('DOMContentLoaded', function (e) {
    const area = document.getElementById('area');
    new generator().createLayout().forEach(e => {
        area.appendChild(e);
    });

});