"use strict";

app.component("test", {
    templateUrl: "components/test.html",
    controller: "TestController",
    bindings: {}
});


app.controller("TestController", function ($log) {

    $log.debug("TestController()");

});
