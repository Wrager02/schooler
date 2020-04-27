"use strict";

app.service("FulltextSearch", function ($log, $timeout) {

    $log.debug("FulltextSearch()");

    const root_list = [
        {
            title: "Old Man's War fiction",
            author: 'John X',
            tags: ['war']
        },
        {
            title: 'Right Ho Jeeves',
            author: 'P.D. Man',
            tags: ['fiction', 'war']
        },
        {
            title: 'Right Ho Jeeves',
            author: 'P.D. ManManMan',
            tags: ['fiction', 'man']
        }
    ];


    const options = {
        includeScore: true,
        shouldSort: true,
        findAllMatches: true,
        keys: ['author', 'tags']
    };

    const fuse = new Fuse(root_list, options);

    this.search = (input) => {
        this.output = fuse.search(input);
        console.log('%c School-Output', 'color:orange; font-size: 32px;');
        console.table(this.output);
        return this.output;
    };
});
