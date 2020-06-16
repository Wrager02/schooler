"use strict";

app.service("SaveFilter", function ($log) {

    $log.debug("SaveFilter()");

    this.saveFilter = (selectedTags, control, input) => {
        localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
        localStorage.setItem("control", JSON.stringify(control));
        localStorage.setItem("input", JSON.stringify(input));
    };

    this.loadSelectedTags = () => {
        if(localStorage.getItem("selectedTags")) {
            return JSON.parse(localStorage.getItem("selectedTags"));
        }
        return [];
    };

    this.loadControl = () => {
        if(localStorage.getItem("control")) {
            return JSON.parse(localStorage.getItem("control"));
        }
        return [false, false, false, false, false, false, false];
    };

    this.loadInput = () => {
        if(localStorage.getItem("input")) {
            return JSON.parse(localStorage.getItem("input"));
        }
        return "";
    };
});
