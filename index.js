/* 
Algorithm:

1. I must access the values in the object that is returned from inquirer
2. to access the inquirer object, I 

MUST INCLUDE:
title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

*/
const fs = require("fs");
const util = require("util")
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
// array of questions for user
const questions = [
        {
        type: "input",
        message: "What is your project name?",
        name: "projectName",

    },
    {
        type: "input",
        message: "Please provide a description and purpose for your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please provide a table of contents for this README.",
        name: "contents"
    },
    {
        type: "input",
        message: "Please provide installation instructions for users.",
        name: "instructions"
    },
    {
        type: "input",
        message: "Please provide usage examples for this project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Please provide any license text here.",
        name: "license"
    },
    {
        type: "input",
        message: "Who contributed to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What testing has been done with this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Please provide any outstanding questions regarding the project.",
        name: "questions"
    }
];




inquirer
    .prompt(questions)
    .then((response) => {
        // console.log("the project name is: " + response.projectName)
        // console.log("the purpose of the project is: " + response.projectPurpose)
        writeFileAsync("readme.md", `## Project Name\n${response.projectName}\n\n## Description\n${response.description}\n\n## Table of Contents\n${response.contents}\n\n## Installation\n${response.instructions}\n\n## Usage\n${response.usage}\n\n## License\n${response.license}\n\n## Contributors\n${response.contributors}\n\n## Tests\n${response.tests}\n\n## Questions\n${response.questions}`);
    })
    .catch(console.error);






// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();




// CODE TO HELP WITH AXIOS CALL
// const fs = require("fs");
// const axios = require("axios");
// const inquirer = require("inquirer");

// inquirer
//   .prompt({
//     message: "Enter your GitHub username:",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const repoNames = res.data.map(function(repo) {
//         return repo.name;
//       });

//       const repoNamesStr = repoNames.join("\n");

//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
//     });
//   });