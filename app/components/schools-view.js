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


app.controller("SchoolsViewController", function ($log, FulltextSearch, SortBy, FilterByFilter, $timeout, AddToFavorite) {

    $log.debug("SchoolsViewController()");

    this.sortList = () => {
        this.list.sort(SortBy.dynamicSort(this.select));
        console.log(this.list);
    };

    this.init = () => {
        FulltextSearch.search("").then(response => {
            this.list = AddToFavorite.loadFavoritesOnInit(response);
            this.originalList = AddToFavorite.loadFavoritesOnInit(response);
            console.log(this.list);
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
        if (this.select) {
            this.sortList();
        }
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


    // Burger //

    $('.burger').click(function(){
        $(this).toggleClass('active');
        return false;
      });



    // Mobile Filter //

    this.filterOn = false;

    this.toggleMobileFilter = () =>{
        console.log(this.filterOn)

        this.scrollTo();

        this.filterOn = !this.filterOn;
    };




    // Ansicht //

    this.listView = false;

    this.changeView = () =>{
        this.listView = !this.listView;
    };



    this.scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    $(document).ready(function() {
        var y = $(this).scrollTop();
        if (y < 500) {
            $('#scroll-top').fadeOut(1);
        }
    });

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });



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
