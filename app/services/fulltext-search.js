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
                            if (typeof e[key] === 'string' && e[key].includes(input)) {
                                return true;
                            }
                            if (typeof e[key] === 'object') {
                                for (let i = 0; i <= e[key].length; i++) {
                                    if(typeof e[key][i] === 'string' && e[key][i].includes(input)) {
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
