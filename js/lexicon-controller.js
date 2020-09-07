function LexiconController ($http) {
    const API = '../database/lexicon.json';
    $http
        .get(API)
        .then(function (response) {
            console.log(response.data);
            this.result = response.data;
        });
    this.entry = [
        {
        title: "testing",
        topics: [],
        content: "",
        link: "",
        mainCategory: "Rails"
        },{
        title: "Trying again",
        topics: [],
        content: "",
        link: "",
        mainCategory: "AngularJS"
        },
    ];
};

angular
    .module('app')
    .controller('LexiconController', LexiconController)