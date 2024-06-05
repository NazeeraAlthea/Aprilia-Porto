const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuList = document.getElementById('menu-list');
const menuLinks = document.getElementsByClassName('link')

menuOpen.addEventListener('click', () => {
    menuList.classList.add('animation-slide-menu')
    menuList.classList.remove('animation-slide-menu-back')
});

menuClose.addEventListener('click', () => {
    menuList.classList.add('animation-slide-menu-back')
    menuList.classList.remove('animation-slide-menu')
});

for (let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', () => {
        menuList.classList.add('animation-slide-menu-back')
        menuList.classList.remove('animation-slide-menu')
    })
}