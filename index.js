/* 
Algorithm:

1. I must access the values in the object that is returned from inquirer
2. to access the inquirer object, I 
*/
const fs = require("fs");
const util = require("util")
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);




inquirer
    .prompt([
        {
        type: "input",
        message: "What is your project name?",
        name: "projectName",

    },
    {
        type: "input",
        message: "What is the purpose of this project?",
        name: "projectPurpose"
    },
    {
        type: "input",
        message: "Please provide instructions for users.",
        name: "instructions"
    },
    {
        type: "input",
        message: "Please provide any relevant development notes or findings.",
        name: "developmentNotes"
    },
    {
        type: "input",
        message: "Please provide any details on planned future development.",
        name: "futureDevelopment"
    }
])
    .then((response) => {
        // console.log("the project name is: " + response.projectName)
        // console.log("the purpose of the project is: " + response.projectPurpose)
        writeFileAsync("readme.md", `##Project Name: ${response.projectName}\n\nProject Purpose: ${response.projectPurpose}\n\nUser Instructions: ${response.instructions}\n\nDevelopment Notes: ${response.developmentNotes}\n\nFuture Development: ${response.futureDevelopment}`);
    })
    .catch(console.error);




// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
