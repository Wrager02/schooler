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

app.controller("DetailViewController", function ($log, $timeout, $stateParams, FilterByIdService) {

    $log.debug("DetailViewController()");

    this.id = $stateParams.id;

    FilterByIdService.filterByID(this.id).then(response => {
        this.school = response[0];
        $timeout();

        let map = document.getElementById("map");
        map.innerHTML =
            "<iframe width='" + map.clientWidth + "' height='" + map.clientHeight + "' frameborder='0' style='border:0; border-radius: 8%;' src='https://www.google.com/maps/embed/v1/place?q=" + this.school.name + "," + this.school.city+ "&key=AIzaSyBpl8WLJuPi3SuXpXezbMuZeubiaozm2gM' allowfullscreen></iframe>"
        ;
    });
});
