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
        // console.log(this.entry);
        // $http
        // .post(API, "hello my friend")
        // .then(function() {
        //     console.log("successful");
        // });
        
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        // import low from 'lowdb';
        // import FileSync from 'lowdb/adapters/FileSync';
        
        const dbFileName = "database/lexicon.json";
        const adapter = new FileSync(dbFileName)
        const db = low(adapter)
        
        // Add another entry
        db.get('entries')
        .push({
            "title": "Number 1",
            "topics": ["ajax", "rails"],
            "content": "This is very complicated",
            "link": "",
            "mainCategory": "Node.js"
            })
        .write();
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);