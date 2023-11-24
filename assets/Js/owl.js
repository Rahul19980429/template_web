// owl
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


