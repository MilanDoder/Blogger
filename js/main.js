const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:3
    },
    960:{
        items:3
    }
}

$(document).ready(function(){
    $nav=$('.nav');

    $toggleCollapse = $('.toggle-collapse');

    /**click event on toggle menu*/
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    });

    //owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:500,
        dots:false,
        nav:true,
        navText:[$('.owl-nav .owl-nav-prev'),$('.owl-nav .owl-nav-next')],
        responsive:responsive
    });

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0,
        },1000);
    })

    // AOS Instance

    AOS.init();


});