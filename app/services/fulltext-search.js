"use strict";

app.service("FulltextSearch", function ($log, $timeout, LoadJson) {

    $log.debug("FulltextSearch()");

    var root_list;

    const options = {

        shouldSort: true,
        findAllMatches: true,
        keys: ['name']

    };

    var fuse;

    this.getRoot = () => {
        //console.log("Get Root ", root_list);
        return root_list;
    }

    this.init = () => {

        LoadJson.getJson().then(response => {
            root_list = response;
            //console.log(response);
            fuse = new Fuse(this.getRoot(), options);
        });

    }


    this.search = (input) => {
        this.init();
        //console.log('%c School-Output', 'color:orange; font-size: 32px;');

        if (input === "") {
            return LoadJson.getJson()
                .then(response => {
                    return response.map(n => {
                        return {
                            "item": n
                        };
                    });
                })
        } else {
            this.output = fuse.search(input);
            //console.table(this.output);
            return this.output;
        }

    };

});
