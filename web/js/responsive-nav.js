$(function() {
    $('.burger').on('click', function() {
        console.log("yay");
        $('.navbar-mobile-menu').toggleClass('hidden');
    });
});