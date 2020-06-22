"use strict";

app.service("FilterByFilter", function ($log, $timeout, LoadJson) {

    $log.debug("FilterByFilter()");

    this.filterList = (list, selectedTags, control) => {
        let favoriten = control.slice(0, 1);
        let schultyp = control.slice(2, 4);
        let abschluss = control.slice(4, 7);

        return list.filter(function (e) {

            let result = false;

            e['specialisations'].forEach(n => {

                if (containsAny(n['specialisation'], selectedTags)) {

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

                    //Das || eventuell durch && ersetzen?

                    if(abschluss[0] && abschluss[1] && abschluss[2] || !abschluss[0] && !abschluss[1] && !abschluss[2]) {
                    } else if(abschluss[0] && abschluss[1]) {
                        if(!e['graduation'].toUpperCase().includes('MATURA') || !e['graduation'].toUpperCase().includes('KEIN ABSCHLUSS')) {
                            return false;
                        }
                    } else if(abschluss[1] && abschluss[2]) {
                        if(!e['graduation'].toUpperCase().includes('KEIN ABSCHLUSS') || !e['graduation'].toUpperCase().includes('DIPLOM')) {
                            return false;
                        }
                    } else if(abschluss[0] && abschluss[2]) {
                        if(!e['graduation'].toUpperCase().includes('MATURA') || !e['graduation'].toUpperCase().includes('DIPLOM')) {
                            return false;
                        }
                    } else if(abschluss[0]) {
                        if(!e['graduation'].toUpperCase().includes('MATURA')) {
                            return false;
                        }
                    } else if(abschluss[1]) {
                        if(!e['graduation'].toUpperCase().includes('KEIN ABSCHLUSS')) {
                            return false;
                        }
                    } else if(abschluss[2]) {
                        if(!e['graduation'].toUpperCase().includes('DIPLOM')) {
                            return false;
                        }
                    }
                    result =  true;
                }

            });

            return result;

        });

    };

    function containsAny(source, target) {
        let result = true;
        if(target.length) {
            for (let i = 0; i < target.length; i++) {
                if(target[i] === source) {
                    result = true;
                    break;
                }
                result = false;
            }
        }
        return result;
    }


});
