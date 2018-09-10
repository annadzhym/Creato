'use strict';

(function ($) {
    $('.menu__nav--el, .menu__title, .header__content--link, .about__content--link, .footer__scroll, .services__flex--link').click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000)
    });

    var $pictures = $('.portfolio__pictures').isotope({
        itemSelector: '.portfolio__pictures--el',
        masonry: {
            columnWidth: '.grid-sizer',
            horizontalOrder: true,
            percentPosition: true,
            gutter: 5
        }
    });

    $('.portfolio__group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $pictures.isotope({ filter: filterValue });
        $('.portfolio__group').find('.portfolio__group--active').removeClass('portfolio__group--active');
        $( this ).addClass('portfolio__group--active');
    });

})(jQuery);