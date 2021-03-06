var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 50,

    loop: true,
    navigation:{
        nextEl: '.arrow'
    },
    breakpoints:{
        540:{
            slidesPerView: 2,
        }
    }

});


const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header')
menuButton.addEventListener('click', function(){
    menuButton.classList.toggle('menu-button-active');
    menu.classList.toggle('header-active');
});