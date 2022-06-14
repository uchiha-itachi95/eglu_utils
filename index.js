#!/usr/bin/env node
const yargs = require("yargs");
const mongoTool = require("./tools/mongo").mongoTool;
const designTool = require("./tools/design").designTool;

const options = yargs.usage("Usage: -t <tool>").option("t", { alias: "tool", describe: "Which tool you wanna use", type: "string", demandOption: true }).argv;

const tool = options.tool;
let args = options._;
if (tool == "mongo") {
  mongoTool(args);
} else if (tool == "design") {
  designTool(args);
} else {
  console.log("Tool is not supported.");
}
