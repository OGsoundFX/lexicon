function EntryController () {
    this.entry = {
    title: "",
    topics: [],
    content: "",
    link: "",
    mainCategory: ""
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);