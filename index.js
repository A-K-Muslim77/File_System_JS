// Sync Write
const fs = require('fs')

fs.writeFileSync("Hello.txt",'Sync hello')

// Sync read

const content = fs.readFileSync("Hello.txt","utf-8")
console.log(content);

// Sync update in file

fs.appendFileSync("Hello.txt",("\nThis is new line."))

// Sync Delete
fs.unlinkSync("Hello.txt")