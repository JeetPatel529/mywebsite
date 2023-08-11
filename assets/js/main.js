$('.TabBtn').click(function () {

    var tabID = $(this).attr('data-tab');

    $(this).addClass('active-tab').siblings().removeClass('active-tab');
    $('#tab-' + tabID).addClass('active-tab-content').siblings().removeClass('active-tab-content');
});


$("#MobileMenuBtn").click(function(){
    $(".mobilemenu-list").toggleClass("mobilemenu-list-show")
    $(this).children().toggleClass("hidden")
})


var swiper = new Swiper("[My_Skills_slider]", {
    slidesPerView: 1.5,
    grabCursor: true,
    centeredSlides: true,
    loop: false,
    mousewheel: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
    effect: "creative",
    creativeEffect: {
        limitProgress: 10,
        prev: {
            opacity: 0.60,
            scale: 0.75,
            translate: ["-100%", 0, 0],
        },
        next: {
            opacity: 0.60,
            scale: 0.75,
            translate: ["100%", 0, 0],
        },
    },
    breakpoints: {
        440: {
            slidesPerView: 2.1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2.8,
        },
        999: {
            slidesPerView: 3.5,
        },
        1440: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
    slideToClickedSlide: true,
});


