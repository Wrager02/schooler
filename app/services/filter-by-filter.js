"use strict";

app.service("FilterByFilter", function ($log, $timeout, LoadJson) {

    $log.debug("FilterByFilter()");

    this.filterList = (list, selectedTags, control) => {
        let favoriten = control.slice(0, 1);
        let schultyp = control.slice(2, 4);
        let abschluss = control.slice(4, 7);

        return list.filter(function (e) {


            if (containsAny(e['specialisations'], selectedTags)) {

                if (favoriten[0] && !e['favorite']) {
                    return false;
                }

                if (schultyp[0] && schultyp[1] || !schultyp[0] && !schultyp[1]) {
                } else if (schultyp[0]) {
                    if (e['private']) {
                        return false;
                    }
                } else if (schultyp[1]) {
                    if (!e['private']) {
                        return false;
                    }
                }

                if (schultyp[0] && schultyp[1] || !schultyp[0] && !schultyp[1]) {
                } else if (schultyp[0]) {
                    if (e['private']) {
                        return false;
                    }
                } else if (schultyp[1]) {
                    if (!e['private']) {
                        return false;
                    }
                }

                if(abschluss[0] && abschluss[1] && abschluss[2] || !abschluss[0] && !abschluss[1] && !abschluss[2]) {
                } else if(abschluss[0] && abschluss[1]) {
                    if(e['graduation'].toUpperCase() !== 'MATURA' || e['graduation'].toUpperCase() !== 'HAUPTSCHULE') {
                        return false;
                    }
                } else if(abschluss[1] && abschluss[2]) {
                    if(e['graduation'].toUpperCase() !== 'HAUPTSCHULE' || e['graduation'].toUpperCase() !== 'INGENIEUR') {
                        return false;
                    }
                } else if(abschluss[0] && abschluss[2]) {
                    if(e['graduation'].toUpperCase() !== 'MATURA' || e['graduation'].toUpperCase() !== 'INGENIEUR') {
                        return false;
                    }
                } else if(abschluss[0]) {
                    if(e['graduation'].toUpperCase() !== 'MATURA') {
                        return false;
                    }
                } else if(abschluss[1]) {
                    if(e['graduation'].toUpperCase() !== 'HAUPTSCHULE') {
                        return false;
                    }
                } else if(abschluss[2]) {
                    if(e['graduation'].toUpperCase() !== 'INGENIEUR') {
                        return false;
                    }
                }
                return true;
            }
            return false;
        });

    };

    function containsAny(source, target) {
        if (target.length > 0) {
            var result = source.filter(function (item) {
                return target.indexOf(item) > -1
            });
            return (result.length > 0);
        }
        return true;
    }


});
