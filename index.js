const fs = require('fs');

// Write file
fs.writeFileSync("Hello.txt", "Sync hello");

// Read
if (fs.existsSync("Hello.txt")) {
    const content = fs.readFileSync("Hello.txt", "utf-8");
    console.log(content);
}

// Update
fs.appendFileSync("Hello.txt", "\nThis is new line.");

// Delete file
if (fs.existsSync("Hello.txt")) {
    fs.unlinkSync("Hello.txt");
}

// Create folder
if (!fs.existsSync("NewFolder")) {
    fs.mkdirSync("NewFolder");
}

// Delete folder
if (fs.existsSync("NewFolder")) {
    fs.rmdirSync("NewFolder");
}
