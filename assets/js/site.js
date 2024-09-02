DIRECTION = null;

function direction() {
    if (DIRECTION === null) {
        DIRECTION = getComputedStyle(document.body).direction;
    }

    return DIRECTION;
}

function isRTL() {
    return direction() === "rtl";

}
function owloptionold(elem) {
    
    var rtl = isRTL();
    $(function () {
        $(`#${elem}`).each(function () {
            const layout = $(this).data('layout');
            const loop = $(this).data('loop')?? true;
            const autoplay = $(this).data('autoPlay')?? true;
            const options = {
                items: 4,
                margin: 14,
                nav: false,
                dots: false,
                loop: true,
                stagePadding: 1,
                stopOnHover: true, autoplayTimeout: 3000,
                rtl: rtl, autoplay: true, smartSpeed: 700,
            };
            const layoutOptions = {
                'grid-4': {
                    responsive: {
                        1200: { items: 4, margin: 14 },
                        992: { items: 4, margin: 14 },
                        768: { items: 3, margin: 14 },
                    }
                },
                'grid-4-sm': {
                    responsive: {
                        1200: { items: 4, margin: 14 },
                        992: { items: 3, margin: 14 },
                        768: { items: 3, margin: 14 },
                    }
                },
                'grid-5': {
                    responsive: {
                        1200: { items: 5, margin: 14 },
                        992: { items: 4, margin: 14 },
                        768: { items: 3, margin: 14 },
                    }
                },
                'horizontal': {
                    items: 3,
                    responsive: {
                        1200: { items: 3, margin: 14 },
                        992: { items: 3, margin: 14 },
                        768: { items: 2, margin: 14 },
                        576: { items: 1 },
                        475: { items: 1 },
                        0: { items: 1 }
                    }
                },
                'horizontal_paner': {
                    items: 7,
                    responsive: {
                        1200: { items: 7, margin: 14 },
                        992: { items: 5, margin: 14 },
                        768: { items: 3, margin: 14 },
                        576: { items: 2 , margin: 14},
                        475: { items: 2 ,margin: 14 },
                        0: { items: 1 }
                    }
                },
            };
            const owl = $('.owl-carousel', this);
            let cancelPreviousTabChange = function () { };

            const owlOptions = $.extend({}, options, layoutOptions[layout]);

            if (/^grid-/.test(layout)) {
                let mobileResponsiveOptions;

                if (parseFloat($(this).data('mobile-grid-columns')) === 2) {
                    mobileResponsiveOptions = {
                        420: { items: 2, margin: 14 },
                        320: { items: 2, margin: 14 },
                        0: { items: 1 },
                    };
                } else {
                    mobileResponsiveOptions = {
                        475: { items: 2, margin: 14 },
                        0: { items: 1 },
                    };
                }

                owlOptions.responsive = $.extend({}, owlOptions.responsive, mobileResponsiveOptions);
            }

            owl.owlCarousel(owlOptions);
        });
    });
}
owloptionold('about_slider');
owloptionold('services_slider');
owloptionold('mission_slider');
owloptionold('partner_slider');
owloptionold('clients_slider');