"use strict";

app.service("FulltextSearch", function ($log, $timeout) {

    $log.debug("FulltextSearch()");

    var root_list = [];

    $.getJSON("./resources/data/schools.json", function(json) {
        json.forEach(n => {
            root_list.push(n);
        });
    })

    console.log(root_list);

    const options = {

        shouldSort: true,
        findAllMatches: true,
        keys: ['name']

    };

    const fuse = new Fuse(root_list, options);

    this.search = (input) => {

        console.log('%c School-Output', 'color:orange; font-size: 32px;');

        if(input === "") {
            return this.createListWithoutInput();
        } else {
            this.output = fuse.search(input);
            console.table(this.output);
            return this.output;
        }


    };

    this.createListWithoutInput = () => {
        let list = [];
        root_list.forEach(n => {
            list.push(
                {
                    "item" : n
                }
            )
        });
        console.table(list);
        return list;
    }
});
