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

    FilterByIdService.filterByID(this.id).then(response => {
        this.school = response[0];
        document.getElementById("map").innerHTML =
            "<iframe ng-repeat=\"boolean in $ctrl.loaded\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0;\" src=\"https://www.google.com/maps/embed/v1/place?q=" + this.school.name + "," + this.school.city+ "&key=AIzaSyBpl8WLJuPi3SuXpXezbMuZeubiaozm2gM\" allowfullscreen></iframe>"
        ;
        $timeout();
    });

});
