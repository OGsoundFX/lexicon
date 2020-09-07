function LexiconController ($http) {
    const ctrl = this;
    const API = '../database/lexicon.json';
    this.lexicon = [];
    $http
        .get(API)
        .then(function (response) {
            ctrl.lexicon = response.data.entries;
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