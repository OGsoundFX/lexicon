function EntryController ($http) {
    const ctrl = this;
    // const API = '../database/lexicon.json';

    this.entry = {
    title: "",
    topics: [],
    content: "",
    link: "",
    mainCategory: ""
    };
    this.submitEntry = function () {
        console.log("testing");
        console.log(ctrl.entry);
        // communicate with the API
        
        // const lowdbFileSync = 'lowdb/adapters/FileSync';
        // const low = require(['lowdb'], function(lowdb) {
        // });
        // const FileSync = require(['lowdb/adapters/FileSync'], function(lowdbFileSync) {
        // });
        // // import low from 'lowdb';
        // // import FileSync from 'lowdb/adapters/FileSync';
        
        // const dbFileName = require(["database/lexicon.json"], function() {
        // });
        // const adapter = new FileSync(dbFileName)
        // const db = low(adapter)
        
        // // Add another entry
        // db.get('entries')
        // .push({
        //     "title": "Number 1",
        //     "topics": ["ajax", "rails"],
        //     "content": "This is very complicated",
        //     "link": "",
        //     "mainCategory": "Node.js"
        //     })
        // .write();
    };
};


angular
    .module('app')
    .controller('EntryController', EntryController);