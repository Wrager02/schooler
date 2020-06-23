"use strict";

app.component("landingPage", {
    templateUrl: "components/landing-page.html",
    controller: "LandingPageController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "landing-page",
        url: "/landing-page",
        component: "landingPage"
    });

    $urlRouterProvider.otherwise("/landing-page");
});


app.controller("LandingPageController", function ($log) {

    $log.debug("LandingPageController()");


    $('.burger').click(function(){
        $(this).toggleClass('active');
        $('#burger-ul').toggleClass('ul-active');
        $('#content').toggleClass('content-active');
        return false;
      });


    this.scrollInfo = () => {
        document.querySelector('.landing-second').scrollIntoView({ behavior: 'smooth' });
        console.log("lost");
    };

    var element_position = $('.landing-second').offset().top;

    $(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = element_position;

    if(y_scroll_pos > scroll_pos_test) {
        $('#burger-ul').addClass('dark-nav');
    }else{
        $('#burger-ul').removeClass('dark-nav');
    }
});

});
