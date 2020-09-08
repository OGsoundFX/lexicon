function LexiconController ($http) {
    const ctrl = this;
    const API = '../database/lexicon.json';
    this.lexicon = [];
    $http
        .get(API)
        .then(function (response) {
            ctrl.lexicon = response.data.entries;
        });
};

angular
    .module('app')
    .controller('LexiconController', LexiconController)