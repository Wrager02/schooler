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

    this.toggleFavorite = () => {
        if(!this.school.favorite) {
            console.log("added school");
            AddToFavorite.addToFavorite(this.school.id);
            this.school.favorite = true;
            console.log(this.school.favorite);
        } else {
            AddToFavorite.removeFromFavorite(this.school.id);
            this.school.favorite = false;
        }
    }
});
