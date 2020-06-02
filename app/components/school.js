"use strict";

app.component("school", {
    templateUrl: "components/school.html",
    controller: "SchoolController",
    bindings: {
        school: '<',
        view: '<'
    }
});


app.controller("SchoolController", function ($log, $timeout) {

    $log.debug("SchoolController()");
});
