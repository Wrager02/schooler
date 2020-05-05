"use strict";

app.service("AttributeFilter", function ($log, $timeout) {

    $log.debug("AttributeFilter()");

    this.filter = (school_array) => {
        return school_array.filter(function (item) {
            return item.item.schultyp === "privat" &&
                item.item.bezirk === "zweiter";
        })
    };


    this.rankSchools = (school_array, selected_filters) => {
        school_array.forEach(n => {
            if(n.item.schultyp.equals(selected_filters[3]) || n.item.schultyp.equals(selected_filters[3]) ) {
                n.item.score += 5;
            }
            if(n.item.bezirk.equals(selected_filters[1])) {
                n.item.score += 3;
            }
            if(n.item.schultyp.equals(selected_filters[2])) {
                n.item.score += 3;
            }
        });
        return school_array;
    }
});
