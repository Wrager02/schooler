"use strict";

app.service("SaveFilter", function ($log) {

    $log.debug("SaveFilter()");

    this.saveFilter = (selectedTags, control, input, select, view) => {
        localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
        localStorage.setItem("control", JSON.stringify(control));
        localStorage.setItem("input", JSON.stringify(input));
        localStorage.setItem("select", JSON.stringify(select));
        localStorage.setItem("view", JSON.stringify(view));
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

    this.loadSelect = () => {
        if(localStorage.getItem("select")) {
            return JSON.parse(localStorage.getItem("select"));
        }
        return "";
    };

    this.loadView = () => {
        if(localStorage.getItem("view")) {
            return JSON.parse(localStorage.getItem("view"));
        }
        return false;
    };
});
