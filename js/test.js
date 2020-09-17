const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const dbFileName = "database/lexicon.json";
const adapter = new FileSync(dbFileName)
const db = low(adapter)

// Add another entry
db.get('entries')
.push({
    "title": "IIFE, Immediately Invoked Function Expression:",
    "topics": ["AngularJS", "javascript", "function"],
    "content": `(() => {})()
    This is an anonymous IIFE that uses the ES6 arrow syntax. The function is () => {}, it has no names and takes no arguments.
    It is incapsulated in () which makes it inaccessible to the general scope and has its own scope.
    The function becomes a function expression which is immediately executed. The variable within the expression can not be accessed from outside it.
    Assigning the IIFE to a variable stores the function's return value, not the function definition itself.`,
    "link": "",
    "mainCategory": "Javascript"
    })
.write();