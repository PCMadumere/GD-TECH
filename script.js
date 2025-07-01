const menu = document.querySelector('.nav-bar ul')
const menuOpen = document.querySelector('.ri-menu-line')
const menuClose = document.querySelector('.ri-close-circle-fill')

menuOpen.addEventListener('click', function(){
    menu.style.top = '13.6%';
    menuOpen.style.display = 'none';
    menuClose.style.display = 'block';
})

menuClose.addEventListener('click', function(){
    menu.style.top = '-50%';
    menuOpen.style.display = 'block';
    menuClose.style.display = 'none';
})
