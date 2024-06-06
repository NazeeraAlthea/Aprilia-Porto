const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const menuList = document.getElementById('menu-list');
const menuLinks = document.getElementsByClassName('link');
const main = document.getElementById('main');

menuOpen.addEventListener('click', () => {
    menuList.classList.add('animation-slide-menu')
    menuList.classList.remove('animation-slide-menu-back')
    main.classList.add('blur')
});

menuClose.addEventListener('click', () => {
    menuList.classList.add('animation-slide-menu-back')
    menuList.classList.remove('animation-slide-menu')
    main.classList.remove('blur')
});

for (let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener('click', () => {
        menuList.classList.add('animation-slide-menu-back')
        menuList.classList.remove('animation-slide-menu')
        main.classList.remove('blur')

    })
}