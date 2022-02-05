$(function () {

    //Burger
    let burger = $('.header__burger');
    let menuBody = $('#nav');

    burger.on('click', function (event) {
        event.preventDefault();

        $('body').toggleClass('lock');
        $(this).toggleClass('active');
        menuBody.toggleClass('active');
    });

    // Animated header
    $(window).scroll(headerScroll);


    function headerScroll() {
        if ($(window).scrollTop() > 150) {
            $('#header').addClass('header__active')
        } else {
            $('#header').removeClass('header__active')
        }
    }



    // Scroll nav
    $('.scrollto a').on('click', function () {

        let href = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 370, // по умолчанию «400» 
            easing: "swing" // по умолчанию «swing» 
        });

        if (burger.hasClass('active')) {
            $('body').removeClass('lock');
            burger.removeClass('active');
            menuBody.removeClass('active');
        }

        return false;
    });


    // Footer arrow
    $('.arrow').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300)
    })

    // Modal
    $('[data-modal]').on('click', function (event) {
        event.preventDefault();
        let modal = $(this).data('modal');

        $('body').addClass('no-scroll');
        $(modal).addClass('show');

        setTimeout(function () {
            $(modal).find('.modal__content').css({
                transform: 'scale(1)',
                opacity: '1'
            });
        });


    });

    $('[data-modal-close]').on('click', function (event) {
        event.preventDefault();
        let modal = $(this).parents('.modal');

        modalClose(modal);
    });

    $('.modal').on('click', function () {
        let modal = $(this);

        modalClose(modal);
    });

    $('.modal__content').on('click', function (event) {
        event.stopPropagation();
    })

    function modalClose(modal) {

        modal.find('.modal__content').css({
            transform: 'scale(0.5)',
            opacity: '0'
        });

        setTimeout(function () {
            $('body').removeClass('no-scroll');
            modal.removeClass('show');
        }, 200);
    }

    // Aos Js https://github.com/michalsnik/aos

    AOS.init({
        // Global settings:
        disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 200, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 700, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
})