"use strict";

app.component("map", {
    templateUrl: "components/map.html",
    controller: "MapController",
    bindings: {}
});


app.controller("MapController", function ($log) {

    $log.debug("MapController()");

});
