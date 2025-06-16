const fs = require("fs");

// Step 1: Write file
fs.writeFile("file.txt", "This is async file", (err) => {
    if (err) return console.error("Error writing file:", err);
    console.log("File write success");

    // Step 2: Read file
    fs.readFile("file.txt", "utf-8", (err, data) => {
        if (err) return console.error("Error reading file:", err);
        console.log("File content after write:\n", data);

        // Step 3: Append to file
        fs.appendFile("file.txt", "\nThis is second line", (err) => {
            if (err) return console.error("Error appending to file:", err);
            console.log("File updated");

            // Step 4: Read again
            fs.readFile("file.txt", "utf-8", (err, updatedData) => {
                if (err) return console.error("Error reading updated file:", err);
                console.log("File content after update:\n", updatedData);

                // Step 5: Delete file
                fs.unlink("file.txt", (err) => {
                    if (err) return console.error("Error deleting file:", err);
                    console.log("File deleted");

                    // Step 6: Create folder
                    fs.mkdir("New Folder", (err) => {
                        if (err) return console.error("Error creating folder:", err);
                        console.log("Folder created");

                        // Step 7: Delete folder
                        fs.rmdir("New Folder", (err) => {
                            if (err) return console.error("Error deleting folder:", err);
                            console.log("Folder deleted");
                        });
                    });
                });
            });
        });
    });
});
