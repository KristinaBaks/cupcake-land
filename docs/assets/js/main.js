
//------- NAVIGATION ------------
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navList = document.querySelector('.nav__list');

toggleNavigation();

function toggleNavigation() {
    navIcon.addEventListener('click', function(){
        if(navIcon.className == 'nav-icon') {
            navIcon.className = 'nav-icon close-icon';
            nav.style.display = 'block';
        } else {
            navIcon.className = 'nav-icon';
            nav.style.display = 'none';
        }
    })
    navList.addEventListener('click', function(){
        if(navIcon.className == 'nav-icon close-icon') {
            navIcon.className = 'nav-icon';
            nav.style.display = 'none';
        }
    })
}
//------- SLIDESHOW ------------
let slideIndex = 0;

showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll('.slideshow-box__slides');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block'; 
    setTimeout(showSlides, 2000);
}

