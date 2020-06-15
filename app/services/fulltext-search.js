"use strict";

app.service("FulltextSearch", function ($log, $timeout, LoadJson) {

    $log.debug("FulltextSearch()");


    this.search = (input) => {
        if (input === "") {
            return LoadJson.getJson()
                .then(response => {
                    return response;
                })
        } else {
            return LoadJson.getJson()
                .then(response => {
                    return response.filter(function (e) {
                        for (let key in e) {
                            if (typeof e[key] === 'string' && (e[key].toLowerCase()).includes(input.toLowerCase())) {
                                return true;
                            }
                            if (typeof e[key] === 'object') {
                                for (let i = 0; i < e[key].length; i++) {
                                    if(typeof e[key][i].specialisation === 'string' && e[key][i].specialisation.toLowerCase().includes(input.toLowerCase())) {
                                        return true;
                                    }
                                }
                            }
                        }
                        return false;
                    });
                })
        }
    };
});
