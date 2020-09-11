const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dbFileName = "database/lexicon.json";
const adapter = new FileSync(dbFileName)
const db = low(adapter)

// Add another entry
db.get('entries')
.push({
    "title": "npm",
    "topics": ["node", "javascript", "manager"],
    "content": "npm is node packet manager",
    "link": "",
    "mainCategory": "Node.js"
    })
.write();