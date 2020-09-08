function EntryController ($http) {
    const ctrl = this;
    const API = '../database/lexicon.json';
    
    this.entry = {
    title: "",
    topics: [],
    content: "",
    link: "",
    mainCategory: ""
    };
    this.submitEntry = function () {
        // communicate with the API
        console.log("testing");

        $http
        .post(API, "hello my friend")
        .then(function() {
            console.log("successful");
        });
        
        // Code to store inputs in json:
            // var fs = require('fs');

            // fs.appendFile('../database/lexicon.json', ' This is my text.', function (err) {
            // if (err) throw err;
            // console.log('Updated!');
            // });
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);