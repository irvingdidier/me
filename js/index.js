var bntMenu = document.getElementById('btn-menu');
var menu = document.getElementById('menu');

function toggleMenu() {
    bntMenu.classList.toggle('change');
    menu.classList.toggle('active');
}

function hideMenu() {
    bntMenu.classList.remove('change');
    menu.classList.remove('active');
}