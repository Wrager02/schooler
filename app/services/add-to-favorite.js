"use strict";

app.service("AddToFavorite", function ($log) {

    $log.debug("AddToFavorite()");

    let favArray = [];
    localStorage.setItem("favorite", JSON.stringify(favArray));

    this.addToFavorite = (school_id) => {
        favArray = JSON.parse(localStorage.getItem("favorite"));
        favArray.push(school_id);
        localStorage.setItem("favorite", JSON.stringify(favArray));
    }

    this.removeFromFavorite = (school_id) => {
        favArray = JSON.parse(localStorage.getItem("favorite"));
        favArray.splice(favArray.indexOf(school_id), 1);
        localStorage.setItem("favorite", JSON.stringify(favArray));
    }

});
