const carousel = document.getElementById('carusel');
const images = document.querySelectorAll('.img_block');
let currentIndex = 0;
let imageWidth = images[0].offsetWidth; 

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function getVisibleImages() {
    if (window.innerWidth <= 480) {
        return 1;
    } else if (window.innerWidth <= 1024) {
        return 2;
    } else {
        return 3;
    }
}

function nextSlide() {
    const visibleImages = getVisibleImages();
    currentIndex = (currentIndex + 1) % images.length;
    if (currentIndex > images.length - visibleImages) {
        currentIndex = 0;
    }
    updateCarousel();
}

function prevSlide() {
    const visibleImages = getVisibleImages();
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateCarousel();
}

window.addEventListener('resize', () => {
    const carouselContainer = document.querySelector('.blocks_con');
    const style = getComputedStyle(carouselContainer);
    const gap = parseFloat(style.gap) || 0;
    if (images.length > 0) {
        const visibleImages = getVisibleImages();
        imageWidth = (carouselContainer.offsetWidth - (gap * (visibleImages - 1))) / visibleImages;
    }
    updateCarousel();
});

window.addEventListener('load', () => {
    const carouselContainer = document.querySelector('.blocks_con');
    const style = getComputedStyle(carouselContainer);
    const gap = parseFloat(style.gap) || 0;
    if (images.length > 0) {
        const visibleImages = getVisibleImages();
        imageWidth = (carouselContainer.offsetWidth - (gap * (visibleImages - 1))) / visibleImages;
    }
    updateCarousel();
});

updateCarousel();


$(function(){
    let header=$("#header");
    let header_top=$("#header_top");
    let headerH=header.height();
    let scrollPos=$(this).scrollTop();

$(window).on("scroll", function(){
    headerH=header.height();
    scrollPos=$(this).scrollTop();
    if(scrollPos>headerH){
        header_top.addClass("fixed");
    }
    else{
        header_top.removeClass("fixed");
    }
    // console.log(scrollPos);
});
// console.log(scrollPos);
});
$("[data-scroll]").on("click",function(){
    event.preventDefault();
    let elementID=$(this).data('scroll');
    console.log(elementID);
});
let elementOffset=$(elementID).offset().top;
$("html, body").animate({
    scrollTop:elementOffset -70
});
navToggle.on("click", function(event){
    event.preventDefault();
    nav.toggleClass("show");
});
