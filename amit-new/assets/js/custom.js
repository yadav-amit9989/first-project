// mobile menu
$(document).ready(function(){
    // hamburger-toggle
    $('.hamburger-link').click(function(){
        $(this).toggleClass('open');
        $('.navigation').slideToggle();
    });
    $('.responsive').slick({
        slidesToShow: 1,
        slidesToScroll:1,
        // infinite:true,
        dots:true,
        // autoplay:true,
    });
    
});


