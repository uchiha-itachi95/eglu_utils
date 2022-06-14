const shell = require("shelljs");
const fs = require("fs");

const designTool = (args) => {
  if (args.length < 4) {
    console.log("Sub command, SVG Directory, Width and Height are required.");
    return;
  }
  let subCommand = args[0];
  if (subCommand == "s2p") {
    const folder = args[1];
    const files = fs.readdirSync(folder);

    const width = parseInt(args[2]);
    const height = parseInt(args[3]);

    if (!width || !height) {
      console.log("Please provide valid Width and Height");
      return;
    }

    files.forEach((file) => {
      if (file.includes(".svg")) {
        let command = `convert-svg-to-png ${folder}/${file} --width ${width} --height ${height}`;
        shell.exec(command);
      }
    });
  } else {
    console.log("Sub command is not supported.");
  }
};

module.exports = { designTool };
