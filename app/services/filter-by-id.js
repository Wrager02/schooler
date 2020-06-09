"use strict";

app.service("FilterByIdService", function ($log, LoadJson) {

    $log.debug("FilterByIdService()");

    this.filterByID = (id) => {
        return LoadJson.getJson()
            .then(response => {
                return response.filter(function (e) {
                    return e.id == id;
                })
            })
    };

});
