"use strict";

app.service("FulltextSearch", function ($log, $timeout, LoadJson) {

    $log.debug("FulltextSearch()");

    var root_list;

    const options = {

        shouldSort: true,
        findAllMatches: true,
        includeScore: true,
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
            return LoadJson.getJson()
                .then(response => {
                    return fuse.search(input);
                })

        }

    };

    /*this.stringSearch = (object, input) => {
        object.forEach(n => {
            if(typeof(input) === 'string' && n.includes(input)) {
                return true;
            }
        });
        return false;
    }

    if(FulltextSearch.stringSearch(['Hey', 'jo', 'nibba'], "jo")) {
        console.log("yes");
    }*/


});
