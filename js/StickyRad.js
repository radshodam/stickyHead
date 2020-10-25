let nav = document.querySelector('.main-nav');
let topDistance = nav.offsetTop;

function fixedNav() {
    if (window.scrollY >= topDistance) {
        document.body.classList.add('fixed-nav');
        document.body.style.marginTop = nav.offsetHeight + 'px';
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.marginTop = 0;
    }
    console.log('it is working!');
}

window.addEventListener('scroll', fixedNav);