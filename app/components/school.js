"use strict";

app.component("school", {
    templateUrl: "components/school.html",
    controller: "SchoolController",
    bindings: {
        school: '<'
    }
});


app.controller("SchoolController", function ($log) {

    $log.debug("SchoolController()");



});
