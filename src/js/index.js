const burgerMenu = () => {
    let button = document.querySelector('.burger');
    let nav = document.querySelector('.navbar')

    button.classList.toggle("header__burger_active");
    nav.classList.toggle("header__navbar_active");
};