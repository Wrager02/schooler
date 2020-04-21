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

});
