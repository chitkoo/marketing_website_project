//waypoint
    //add active class to current section
    const addActive = function (current){
        $('.nav-link').removeClass('active');

        $(`.nav-link[href='#${current}']`).addClass('active');
    }

    //find current section
    const navScroll = function () {

        let currentSection = $('section[id]');
        currentSection.waypoint(function(direction){

            if(direction == 'down'){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                addActive(currentSectionId);
            }

        },{offset: '150px'});

        currentSection.waypoint(function(direction){

            if(direction == 'up'){
                let currentSectionId = $(this.element).attr('id');
                console.log(currentSectionId);
                addActive(currentSectionId);
            }

        },{offset: '150px'});
    }
    navScroll();




//how to customize nav bar
$(function() {
    //get screen height
    let screenHeight = $(window).height();
    // console.log(screenHeight);

    //get scroll position
    $(window).on('scroll', function(){
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        
        // currentPosition >= screenHeight ? $('.site-nav').addClass('site-nav-scroll'): $('.site-nav').removeClass('site-nav-scroll') ;

        // currentPosition < screenHeight || addActive('home');
        // if(currentPosition >= screenHeight){
        //     $('.site-nav').addClass('site-nav-scroll');
        // }else{
        //     $('.site-nav').removeClass('site-nav-scroll');
        //     addActive('home');
        // } 
        if(currentPosition >= screenHeight){
            $(".site-nav").addClass("site-nav-scroll");
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            
        }                                                                                          
        //home mr active pyn htae pay tr
    });

    //phone nav
    $('.navbar-toggler').on('click',function(){
        let result = $('.menu-icon').hasClass('fa-bars');
        // console.log(result);
        if(result){
            $('.menu-icon').removeClass('fa-bars').addClass('fa-times');
        }
        else{
            $('.menu-icon').removeClass('fa-times').addClass('fa-bars');
        }
    })
});





wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animate__animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
});
wow.init();

$('.pricing-slide').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ],
});