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


app.controller("SchoolsViewController", function ($log, FulltextSearch, SortBy, FilterByFilter, $timeout) {

    $log.debug("SchoolsViewController()");

    this.sortList = () => {
        this.list.sort(SortBy.dynamicSort(this.select));
    };

    this.init = () => {
        FulltextSearch.search("").then(response => {
            this.list = response;
            this.originalList = response;
        });
    };
    this.init();


    this.search = () => {
        FulltextSearch.search(this.input).then(response => {
            this.list = response;
            this.originalList = response;
            this.applyFilters();
            if (this.select) {
                this.sortList();
            }
            $timeout();
        });
    };

    this.applyFilters = () => {
        this.list = FilterByFilter.filterList(this.originalList, this.selectedTags, this.control);
        console.log(this.list);
        //this.search();
    };

    this.showTag = (tag) => {
        if (!this.tagInput) {
            return true;
        } else {
            return tag.toLowerCase().includes(this.tagInput.toLowerCase());
        }
    };



    // Ansicht //

    this.listView = true;

    this.changeView = () =>{
        this.listView = !this.listView;
    };




    // Schwerpunkt Tags //

    

    this.tags = ["Mechatronik", "Informationstechnologie", "Chemie", "Sport", "Design", "Fotografie", "Designee", "Fotografieee", "Hirsie", "ist", "lost", "af", "denn", "hallo", "moin", "karl ess", "insolvenz", "madeira"];
    this.selectedTags = [];

    this.tagSelected = ((this.selectedTags.length < 1) ? false : true);

    this.selectTag = (tag) => {
         this.selectedTags.push(this.tags[tag]);
         this.tags.splice(tag, 1);
         this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
    };

    this.deselectTag = (tag) => {
         this.tags.push(this.selectedTags[tag]);
         this.selectedTags.splice(tag, 1);
         this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
    };



    // Buttons
    
    this.control = [false, false, false, false, false, false, false];

    this.change = (button) =>{
        this.control[button] = !this.control[button];
    }
});
