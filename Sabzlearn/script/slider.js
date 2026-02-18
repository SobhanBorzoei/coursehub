let swiper = new Swiper(".mySwiper", {
    speed: 800,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay: {
        delay: 4000,         
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        586: {
            slidesPerView: 2,
        },
        840: {
            slidesPerView: 3,
        },
    },
    keyboard: {
        enabled: true,
    },
    pagination: {
        // el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});