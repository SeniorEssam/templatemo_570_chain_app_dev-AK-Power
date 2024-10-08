
$(function () {
        const productsView = $('.products-view');
        const productsList = productsView.find('.products-list');


        productsList.attr('data-layout', $('.layout-switcher__button--active').first().attr('data-layout'));
        productsList.attr('data-with-features', $('.layout-switcher__button--active').first().attr('data-with-features'));
    $('.layout-switcher__button').on('click', function() {
        const layoutSwitcher = $(this).closest('.layout-switcher');
        const productsView = $(this).closest('.products-view');
        const productsList = productsView.find('.products-list');

        layoutSwitcher.find('.layout-switcher__button').removeClass('layout-switcher__button--active');
        $(this).addClass('layout-switcher__button--active');

        productsList.attr('data-layout', $(this).attr('data-layout'));
        productsList.attr('data-with-features', $(this).attr('data-with-features'));
    });
});