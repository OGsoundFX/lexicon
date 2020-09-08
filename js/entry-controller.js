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
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);