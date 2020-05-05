"use strict";

app.service("LoadJson", function ($log, $http) {

    $log.debug("LoadJson()");

    var jsonInput;

    this.getJson = () => {
        if(jsonInput) {
            return new Promise(jsonInput);
        } else {
            return $http.get("./resources/data/schools.json")
                .then(response => {
                    //console.log(response);
                    jsonInput = response.data;
                    return jsonInput;
                });
        }
    }

});
