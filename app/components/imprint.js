"use strict";

app.component("imprint", {
    templateUrl: "components/imprint.html",
    controller: "ImprintController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "imprint",
        url: "/imprint",
        component: "imprint"
    });

    // $urlRouterProvider.otherwise("/schools-view");
});


app.controller("ImprintController", function ($log) {

    $log.debug("ImprintController()");


    //I can't do anything :(

});
