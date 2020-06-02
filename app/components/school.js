"use strict";

app.component("school", {
    templateUrl: "components/school.html",
    controller: "SchoolController",
    bindings: {
        school: '<',
        view: '<'
    }
});


app.controller("SchoolController", function ($log, AddToFavorite) {

    $log.debug("SchoolController()");

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }

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
        }
    }
});
