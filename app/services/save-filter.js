"use strict";

app.service("SaveFilter", function ($log) {

    $log.debug("SaveFilter()");

    this.saveFilter = (selectedTags, tags, control, input, select, view) => {
        localStorage.setItem("selectedTags", JSON.stringify(selectedTags));
        localStorage.setItem("tags", JSON.stringify(tags));
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

    this.loadTags = () => {
        if(localStorage.getItem("tags")) {
            return JSON.parse(localStorage.getItem("tags"));
        }
        return ["Abendschule", "Administration", "Arabisch", "Baugewerbe", "Bautechnik",
            "BHAK", "BHAS", "Biomedizin", "Bundesrealgymnasium", "Büro",
            "Bürokaufleute", "Chemie", "Design", "Dienstleistungen", "Einzelhandel",
            "Elektronik", "Elektrotechnik", "Elementarpädagogik", "Fachlehrgang für Marktkommunikation", "Fachschule Informationstechnik",
            "Fachschule Mechatronik", "Fahrradmechatronik", "Farbe", "Finanzen", "Fotografie",
            "Gartenbau", "Gastgewerbe", "Gesundheit", "Gesundheits- und Krankenpflege", "Grafik",
            "Gymnasium", "Handel", "Heereslogistik", "Holz", "Industrie",
            "Informatik", "Informationstechnologie", "Jüdische Sozialberufe", "Karosseriebautechnik", "Klang",
            "Kraftfahrzeugtechnik", "Kunst", "Kunststofftechnik", "Küche und Service", "Lack",
            "Lebensmittel", "Maschinenbau", "Mechatronik", "Metall/Maschinenbau", "Metalltechnik, Glasbautechnik und Technische Zeichner",
            "Mode", "Multimedia", "Musik", "Netzwerktechnik", "Patisserie-Meisterklasse",
            "Polytechnische Schule", "Printmedia", "Reinigung", "Reisen", "Sanitär-, Heizungs- und Klimatechnik", "Schönheitsberufe",
            "Sozialpädagogik", "Spar", "Spengler", "Sport", "Textilindustrie",
            "Tiere", "Tourismus", "Transport", "Veranstaltungstechnik", "Verwaltungsberufe",
            "Werkmeisterschule", "Wirtschaft-Soziales", "Wirtschaftsingenieure", "Wirtschaftliche Berufe", "Wohnheim",
            "Zahntechnik"];
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
