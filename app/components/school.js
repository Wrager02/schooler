"use strict";

app.component("school", {
    templateUrl: "components/school.html",
    controller: "SchoolController",
    bindings: {
        school: '<',
        view: '<',
        fav: '&'
    }
});


app.controller("SchoolController", function ($log, $scope, AddToFavorite) {

    $log.debug("SchoolController()");

    function wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
            end = new Date().getTime();
        }
    }

    this.getIcon = () => {

        if(typeof this.school.specialisations[0] !== 'undefined'){
            this.getColor();
            return "fa-"+ this.school.specialisations[0].graphic;
        }
        
    }

    

    this.getColor = () => {
        if(typeof this.school.specialisations[0] !== 'undefined'){

            if(this.view == false){
                $("#"+this.school.id).css('background-color', this.school.specialisations[0].hsl);
                $("#"+this.school.id).css('color', "#ffffff");
            }else{
                $("#"+this.school.id).css('background-color', "#ffffff");
                $("#"+this.school.id).css('color', this.school.specialisations[0].hsl);
            }
            
        }
    }

    this.$onChanges = function (changes) { 
        if (changes.view) {
            this.getColor();
        }
    }

      
    

    this.toggleFavorite = () => {
        if(!this.school.favorite) {
            AddToFavorite.addToFavorite(this.school.id);
            this.school.favorite = true;
            $('#favorite-alert').fadeIn();
            setTimeout(() => {
                $('#favorite-alert').fadeOut(); }, 1500);
        } else {
            AddToFavorite.removeFromFavorite(this.school.id);
            this.school.favorite = false;
            $('#disable-favorite-alert').fadeIn();
            setTimeout(() => {
                $('#disable-favorite-alert').fadeOut(); }, 1500);
            this.fav({f: this.school.favorite});
        }
    }
});
