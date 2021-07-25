

let treeFileObj = require("./activity/tree");
let helpFileObj = require("./activity/help");
let organiseFileObj = require("./activity/organise");

let input = process.argv.slice(2);

let command = input[0];
let path = input[1];

switch (command) {
    case "tree":
        treeFileObj.fxn(path);
        break;

    case "organise":
        organiseFileObj.fxn(path);
        break;

    case "help":
        helpFileObj.fxn(path);
        break;
     
    default:
        console.log("Please provide valid input....");
        break;
}

