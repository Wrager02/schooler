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


app.controller("SchoolsViewController", function ($log, FulltextSearch, SortBy, $timeout) {

    $log.debug("SchoolsViewController()");

    this.sortList = () => {
        this.list.sort(SortBy.dynamicSort(this.select));
        console.log(this.list);
    };


    this.init = () => {
        FulltextSearch.search("").then(response => {
            this.list = response;
        });
    };
    this.init();

    this.showTag = (tag) => {
        if (!this.tagInput) {
            return true;
        } else {
            return tag.toLowerCase().includes(this.tagInput.toLowerCase());
        }
    }


    this.search = () => {
        FulltextSearch.search(this.input).then(response => {
            this.list = response;
            $timeout();
        });
    };


    // Schwerpunkt Tags //

    

    this.tags = ["Mechatronik", "Informationstechnologie", "Chemie", "Sport", "Design", "Fotografie", "Designee", "Fotografieee" ];
    this.selectedTags = [];
    
    console.log(this.selectedTags.length);

    this.tagSelected = ((this.selectedTags.length < 1) ? false : true);

    this.selectTag = (tag) => {
         this.selectedTags.push(this.tags[tag]);
         this.tags.splice(tag, 1);
         this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
    }

    this.deselectTag = (tag) => {
         this.tags.push(this.selectedTags[tag]);
         this.selectedTags.splice(tag, 1);
         this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
    }
});
