function LexiconController ($http) {
    const ctrl = this;
    const API = '../database/lexicon.json';
    this.lexicon = [];
    $http
        .get(API)
        .then(function (response) {
            ctrl.lexicon = response.data.entries;
        });


// Code to store inputs in json:
    // var fs = require('fs');

    // fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    // if (err) throw err;
    // console.log('Updated!');
    // });


// MODEL:
    // this.entry = [
    //     {
    //     title: "testing",
    //     topics: [],
    //     content: "",
    //     link: "",
    //     mainCategory: "Rails"
    //     },{
    //     title: "Trying again",
    //     topics: [],
    //     content: "",
    //     link: "",
    //     mainCategory: "AngularJS"
    //     },
    // ];
};

angular
    .module('app')
    .controller('LexiconController', LexiconController)