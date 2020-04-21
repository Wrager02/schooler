"use strict";

app.component("detailView", {
    templateUrl: "components/detail-view.html",
    controller: "DetailViewController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "detail-view",
        url: "/detail-view",
        component: "detailView"
    });

    // $urlRouterProvider.otherwise("/detail-view");
});


app.controller("DetailViewController", function ($log) {

    $log.debug("DetailViewController()");

});
