"use strict";

app.component("schoolsView", {
    templateUrl: "components/schools-view.html",
    controller: "SchoolsViewController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "schools-view",
        url: "/schools-view",
        component: "schoolsView"
    });

    // $urlRouterProvider.otherwise("/schools-view");
});


app.controller("SchoolsViewController", function ($log, FulltextSearch) {

    $log.debug("SchoolsViewController()");

    this.list = FulltextSearch.search("");

    this.tags = ["Mechatronik", "Informationstechnologie", "Chemie", "Sport", "Design", "Fotografie", "Designee", "Fotografieee" ];
    this.selectedTags = [];

    this.selectTag = (tag) => {
         this.selectedTags.push(this.tags[tag]);
         this.tags.splice(tag, 1);
    }

    this.deselectTag = (tag) => {
         this.tags.push(this.selectedTags[tag]);
         this.selectedTags.splice(tag, 1);
    }
});
