"use strict";

app.component("schoolsView", {
    templateUrl: "components/schools-view.html",
    controller: "SchoolsViewController",
    bindings: {}
});


app.controller("SchoolsViewController", function ($log) {

    $log.debug("SchoolsViewController()");

});
