"use strict";

app.component("contact", {
    templateUrl: "components/contact.html",
    controller: "ContactController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "contact",
        url: "/contact",
        component: "contact"
    });

    // $urlRouterProvider.otherwise("/schools-view");
});


app.controller("ContactController", function ($log) {

    $log.debug("ContactController()");


    //I can't do anything :(

});