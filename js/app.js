let iconsNav = document.querySelector('.icons-nav'); 
let menuOpen = document.querySelector('.open');
let menuClose = document.querySelector('.close');
let listaNav = document.querySelector('.lista-nav');

console.log(iconsNav);
console.log(menuOpen);
console.log(menuClose);

menuOpen.addEventListener('click', function() {
    iconsNav.classList.add('active')
    listaNav.classList.add('menu-active')
})

menuClose.addEventListener('click', function() {
    iconsNav.classList.remove('active')
    listaNav.classList.remove('menu-active')
})

