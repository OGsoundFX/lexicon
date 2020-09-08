const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dbFileName = "database/lexicon.json";
const adapter = new FileSync(dbFileName)
const db = low(adapter)

// Add another entry
db.get('entries')
.push({
    "title": "Here's a new entry",
    "topics": ["ajax", "rails"],
    "content": "This is very complicated",
    "link": "",
    "mainCategory": "Node.js"
    })
.write();