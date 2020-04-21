"use strict";

app.component("main", {
    templateUrl: "components/main.html",
    controller: "MainController",
    bindings: {}
});


app.controller("MainController", function ($log) {

    $log.debug("MainController()");

});
