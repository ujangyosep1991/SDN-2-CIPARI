$(document).ready(function(){
    
    $("#slider-hero").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        navText: [
            "<i class='fas fa-angle-left'><i>",
            "<i class='fas fa-angle-right'><i>"
        ],
        navContainer: "#slider-hero-nav",
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nac: true,
        mouseDrag: false,
        items: 3,
        dots: false,
        margin: 60,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-1',
    });


});