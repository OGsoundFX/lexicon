function EntryController () {
    this.entry = {
    title: "",
    topics: [],
    content: "",
    link: "",
    mainCategory: ""
    };
    this.submitEntry = function () {
        // communicate with the API
    // Code to store inputs in json:
    console.log("testing");
    var fs = require('fs');

    fs.appendFile('../database/lexicon.json', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
    });
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);