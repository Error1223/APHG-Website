const navToggle = document.querySelector('.nav-toggle');
const navItem = document.querySelectorAll('.nav__item');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

for(var i = 0; i<navItem.length; i++){
    navItem[i].addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
}