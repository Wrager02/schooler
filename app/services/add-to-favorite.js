"use strict";

app.service("AddToFavorite", function ($log) {

    $log.debug("AddToFavorite()");

    let favArray = [];

    if (localStorage.getItem("favorite") !== null) {
        favArray = JSON.parse(localStorage.getItem("favorite"));
    }

    this.addToFavorite = (school_id) => {
        favArray.push(school_id);
        localStorage.setItem("favorite", JSON.stringify(favArray));
    };

    this.removeFromFavorite = (school_id) => {
        favArray.splice(favArray.indexOf(school_id), 1);
        localStorage.setItem("favorite", JSON.stringify(favArray));
    };

    this.loadFavoritesOnInit = (school_array) => {
        return school_array.map(n => {
            for (let i = 0; i < favArray.length; i++) {
                if (n.id === favArray[i]) {
                    n.favorite = true;
                }
            }
            return n;
        });
    };

    this.isFavorite = (school_id) =>  {
        return favArray.includes(school_id);
    };

});
