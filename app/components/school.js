"use strict";

app.component("school", {
    templateUrl: "components/school.html",
    controller: "SchoolController",
    bindings: {}
});


app.controller("SchoolController", function ($log) {

    $log.debug("SchoolController()");

});
