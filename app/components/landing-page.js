"use strict";

app.component("landingPage", {
    templateUrl: "components/landing-page.html",
    controller: "LandingPageController",
    bindings: {}
});


app.controller("LandingPageController", function ($log) {

    $log.debug("LandingPageController()");

});
