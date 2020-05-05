"use strict";

app.service("FulltextSearch", function ($log, $timeout) {

    $log.debug("FulltextSearch()");

    const root_list = [
        {
            name: "HTL Rennweg",
            bezirk: 'dritter',
            schultyp: 'privat'
        },
        {
            name: "HTL Ottakring",
            bezirk: 'zweiter',
            schultyp: 'privat'
        },
        {
            name: "HTL Mödling",
            bezirk: 'zweiter',
            schultyp: 'öffentlich'
        }
    ];


    const options = {

        shouldSort: true,
        findAllMatches: true,
        keys: ['name', 'bezirk', 'schultyp']

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
