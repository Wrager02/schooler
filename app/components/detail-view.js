"use strict";

app.component("detailView", {
    templateUrl: "components/detail-view.html",
    controller: "DetailViewController",
    bindings: {}
});


app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: "detail-view",
        url: "/detail-view?id",
        component: "detailView"
    });

    // $urlRouterProvider.otherwise("/detail-view");
});

app.controller("DetailViewController", function (AddToFavorite, $log, $timeout, $stateParams, FilterByIdService) {

    $log.debug("DetailViewController()");

    document.body.scrollTop = 0;

    this.id = $stateParams.id;

    FilterByIdService.filterByID(this.id).then(response => {
        this.school = response[0];
        if (AddToFavorite.isFavorite(this.school.id)) {
            this.school.favorite = true;
        }
        $timeout();

        let map = document.getElementById("map");
        map.innerHTML =
            "<iframe width='" + map.clientWidth + "' height='" + map.clientHeight + "' frameborder='0' style='border:0; border-radius: 8%;' src='https://www.google.com/maps/embed/v1/place?q=" + this.school.name + "," + this.school.city+ "&key=AIzaSyBpl8WLJuPi3SuXpXezbMuZeubiaozm2gM' allowfullscreen></iframe>"
        ;
    });

    this.toggleFavorite = () => {
        if(!this.school.favorite) {
            AddToFavorite.addToFavorite(this.school.id);
            this.school.favorite = true;
            $('#favorite-alert').fadeIn();
            setTimeout(() => {
                $('#favorite-alert').fadeOut(); }, 1500);
        } else {
            AddToFavorite.removeFromFavorite(this.school.id);
            this.school.favorite = false;
            $('#disable-favorite-alert').fadeIn();
            setTimeout(() => {
                $('#disable-favorite-alert').fadeOut(); }, 1500);
            this.fav({f: this.school.favorite});
        }
    }

    this.getHref = (mode) => {
        let text = "Schau dir doch mal die Schule " + this.school.name + " auf Schooler an!\n"
        switch (mode) {
            case 0:
                return "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
                break;
            case 1:
                return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(text + window.location.href);
                break;
            case 2:
                return "https://api.whatsapp.com/send?text=" + encodeURIComponent(text + window.location.href);
        }
    }
});
