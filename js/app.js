let iconsNav = document.querySelector('.icons-nav'); 
let menuOpen = document.querySelector('.open');
let menuClose = document.querySelector('.close');

console.log(iconsNav);
console.log(menuOpen);
console.log(menuClose);

menuOpen.addEventListener('click', function() {
    iconsNav.classList.add('active')
})

menuClose.addEventListener('click', function() {
    iconsNav.classList.remove('active')
})