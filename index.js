// required modules
const inquirer = require("inquirer");
const generator = require("./utils/generateMarkdown")
const fs = require("fs");

// array of license choices.
const licences = ['CC 4.0 ShareAlike', 'CC 4.0 NonCommercial', 'CC 4.0 NoDivatives', 'Eclipse Public License', 'Open Database License (ODbL)', 'Public Domain Dedication and License (PDDL)', 'IBM', 'MIT', 'The Unlicense', 'The Do What the Fuck You Want to Public License'];
// I wrote all of my questions before realizing you wanted us to put it in an array as well, so i didnt feel like re-arranging it all.


// main prompt function
function init () {
    inquirer
        .prompt([
            {
                type: 'confirm',
                message: "The following prompts will ask you about certain aspects of your projects. It is recommended that you answer all prompts for the highest quality read me, however you may leave fields blank if they do not apply to your project, or if you choose to not expand upon default values. You feel me?",
                name: "intro",
            },
            {
                type: 'input',
                message: "What is your name? (first and last)",
                name: "realName",
            },
            {
                type: 'input',
                message: "What is your gitHub username?",
                name: "gitHubName",
            },
            {
                type: 'input',
                message: "What is your email address?",
                name: "email",
            },
            {
                type: 'input',
                message: "What is your project's name?",
                name: "projTitle",
            },
            {
                type: 'confirm',
                message: "what is the purpose of the project?",
                name: "education",
            },
            {
                type: 'input',
                message: "Short description of the project.",
                name: "projDesc",
            },
            {
                type: 'input',
                message: "Please list all of the installation steps required to run this project.",
                name: "installation",
            },
            {
                type: 'input',
                message: "what is the recomended usage for this project?",
                name: "usage",
            },
            {
                type: 'input',
                message: "Are there any additional comments you would like to add to this project?",
                name: "comments",
            },
            {
                type: 'list',
                message: "What licence would you like to set?",
                name: "license",
                choices: licences,
            },
            {
                type: 'input',
                message: "please add the file path of a screenshot you would like to include.",
                name: "screenshot",
            },
            {
                type: 'input',
                message: "please provide a link for a demo of your project.",
                name: "demo",
            },
            {
                type: 'input',
                message: "please provide a link to the repo used for this project.",
                name: "repo",
            },
            {
                type: 'confirm',
                message: "Would you like to use the default contribution guidelines?",
                name: "contributeIsDefault",
            },
            {
                type: 'input',
                message: "If no, how would you like people to contribute?",
                name: "contributeDesc",
            }
        ])
        .then(data => {
            const fileName = `${data.projTitle.toLowerCase().split(' ').join('')}readme.md`;
            writeToFile(fileName, data);
        });
}

// write file function.
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generator(data), (err) =>
        err ? console.log(err) : console.log(`Success! you have created ${fileName}!`)
    );
}


init();