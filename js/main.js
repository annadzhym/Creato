'use strict';

(function ($) {
    // var elem = document.querySelector('.pictures');
    // var iso = new Isotope( elem, {
    //     itemSelector: '.pictures-el',
    //     layoutMode: 'fitRows'
    // });

    //
    // $('.pictures').isotope({
    //     itemSelector: '.grid-item',
    //     layoutMode: 'fitRows',
    //     masonry: {
    //         columnWidth: 200
    //     }
    // });




    var $pictures = $('.pictures').isotope({
        itemSelector: '.pictures__el',
        layoutMode: 'fitRows'
    });

    $pictures.isotope({filter: '.product'});
    $pictures.isotope({filter: '.abstract'});
    $pictures.isotope({filter: '.weeding'});
    $pictures.isotope({filter: '.landscape'});
    $pictures.isotope({filter: '.*'});

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $pictures.isotope({ filter: filterValue });
    });

})(jQuery);