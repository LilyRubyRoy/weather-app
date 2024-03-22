const fs = require("fs");
const path = require("path");

const directories = ["src", "dist"];

directories.forEach((dir) => {
  // if directory exists, ignore, otherwise create it
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
});

function createFile(filePath) {
  // if file exists, ignore, otherwise create it
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "");
  }
}

createFile(path.join("src", "template.html"));
createFile(path.join("src", "index.ts"));
createFile(".gitignore", "node_modules\n/dist");
