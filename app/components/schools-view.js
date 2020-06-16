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


app.controller("SchoolsViewController", function ($log, FulltextSearch, SortBy, FilterByFilter, $timeout, AddToFavorite, SaveFilter) {

    $log.debug("SchoolsViewController()");

    this.sortList = () => {
        this.list.sort(SortBy.dynamicSort(this.select));
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
        console.log(this.list);
    };

    this.init = () => {
        this.input = SaveFilter.loadInput();
        this.select = SaveFilter.loadSelect();
        FulltextSearch.search(this.input).then(response => {
            this.list = AddToFavorite.loadFavoritesOnInit(response);
            this.originalList = AddToFavorite.loadFavoritesOnInit(response);
            this.applyFilters();
            if (this.select) {
                this.sortList();
            }
        });
    };

    this.init();


    this.search = () => {
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
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

    $('.burger').click(function () {
        $(this).toggleClass('active');
        return false;
    });


    // Mobile Filter //

    this.filterOn = false;

    this.toggleMobileFilter = () => {
        console.log(this.filterOn);

        this.scrollTo();

        this.filterOn = !this.filterOn;
    };


    // Ansicht //

    this.listView = SaveFilter.loadView();

    this.changeView = () => {
        this.listView = !this.listView;
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
    };


    this.scrollTo = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    $(document).ready(function () {
        var y = $(this).scrollTop();
        if (y < 500) {
            $('#scroll-top').fadeOut(1);
        }
    });

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 500) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });


    // Schwerpunkt Tags //


    this.tags = ["Abendschule", "Administration", "Arabisch", "Baugewerbe", "Bautechnik",
        "BHAK", "BHAS", "Biomedizin", "Bundesrealgymnasium", "Büro",
        "Bürokaufleute", "Chemie", "Design", "Dienstleistungen", "Einzelhandel",
        "Elektronik", "Elektrotechnik", "Elementarpädagogik", "Fachlehrgang für Marktkommunikation", "Fachschule Informationstechnik",
        "Fachschule Mechatronik", "Fahrradmechatronik", "Farbe", "Finanzen", "Fotografie",
        "Gartenbau", "Gastgewerbe", "Gesundheit", "Gesundheits- und Krankenpflege", "Grafik",
        "Gymnasium", "Handel", "Heereslogistik", "Holz", "Industrie",
        "Informatik", "Informationstechnologie", "Jüdische Sozialberufe", "Karosseriebautechnik", "Klang",
        "Kraftfahrzeugtechnik", "Kunst", "Kunststofftechnik", "Küche und Service", "Lack",
        "Lebensmittel", "Maschinenbau", "Mechatronik", "Metall/Maschinenbau", "Metalltechnik, Glasbautechnik und Technische Zeichner",
        "Mode", "Multimedia", "Musik", "Netzwerktechnik", "Patisserie-Meisterklasse",
        "Polytechnische Schule", "Printmedia", "Reinigung", "Reisen", "Sanitär-, Heizungs- und Klimatechnik", "Schönheitsberufe",
        "Sozialpädagogik", "Spar", "Spengler", "Sport", "Textilindustrie",
        "Tiere", "Tourismus", "Transport", "Veranstaltungstechnik", "Verwaltungsberufe",
        "Werkmeisterschule", "Wirtschaft-Soziales", "Wirtschaftsingenieure", "Wirtschaftliche Berufe", "Wohnheim",
        "Zahntechnik"];
    this.selectedTags = SaveFilter.loadSelectedTags();

    this.tagSelected = ((this.selectedTags.length < 1) ? false : true);

    this.selectTag = (tag) => {
        this.selectedTags.push(this.tags[tag]);
        this.tags.splice(tag, 1);
        this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
    };

    this.deselectTag = (tag) => {
        this.tags.push(this.selectedTags[tag]);
        this.selectedTags.splice(tag, 1);
        this.tagSelected = ((this.selectedTags.length < 1) ? false : true);
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
    };


    // Buttons

    this.control = SaveFilter.loadControl();

    this.change = (button) => {
        this.control[button] = !this.control[button];
        SaveFilter.saveFilter(this.selectedTags, this.control, this.input, this.select, this.listView);
    }


});
