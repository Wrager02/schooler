"use strict";

app.component("detailView", {
    templateUrl: "components/detail-view.html",
    controller: "DetailViewController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "detail-view",
        url: "/detail-view?id",
        component: "detailView"
    });

    // $urlRouterProvider.otherwise("/detail-view");
});

app.controller("DetailViewController", function ($log, $stateParams, FilterByIdService, $timeout) {

    $log.debug("DetailViewController()");

    this.id = $stateParams.id;

    // this.school = FilterByIdService.filterByID(this.id);


    FilterByIdService.filterByID(this.id).then(response => {
        this.school = response[0];
    });

});
