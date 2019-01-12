// $(document).ready(function(){
//         $( ".nav-item" ).hover(function(){
//             $(this).find(".dropdown-menu").slideToggle("slow");
//     });
//     });

$(document).ready(function(){
   $(".menu_a").click(function(){
    $(this).toggleClass("navactive");
})
})

$('#main_sld').owlCarousel({
    loop:true,
    margin:10,
    nav:!0,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})
$(".section1 .burger").click(function(){
    $(this).toggleClass("rotate");
    $(".section1 .menu").slideToggle(600);
})
$('#gallery').owlCarousel({
    loop:true,
    margin:10,
    nav:!0,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        991 :{
            item:3
        },
        1000:{
            items:6
        }
    }
})


   $(window).on('scroll', function () {
    if ($(this).scrollTop() > 300) {
        $(".section1").addClass('fixed');
    } else {
        $('.section1').removeClass('fixed');
    }
});
//Scoll
$(window).scroll(function(){
    if ($(this).scrollTop() > 400) 
    {
        $('.firstpage').fadeIn();
    } 
    else 
    {
        $('.firstpage').fadeOut();
    }
});
$('.firstpage').click(function(){
    $('html, body').animate({scrollTop : 0},1000);
    return false;
});
