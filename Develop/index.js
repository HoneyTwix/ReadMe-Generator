// TODO: Include packages needed for this application

const fs = require("fs")
const inquirer = require("inquirer")
const path = require("path")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },

    {
        type: "input",
        name: "description",
        message: "What is the description of your project?"

    },

    {
        type: "input",
        name: "installation",
        message: "What is the command that will allow you to install dependencies?"
    },

    {
        type: "input",
        name: "usage",
        message: "What should the user know about in order to use this repository?"
    },

    {
        type: "input",
        name: "contributing",
        message: "How can someone contribute to this project?"
    },

    {
        type: "list",
        name: "license",
        message: "What license does your project have",
        choices: ["Apache 2.0", "BSD-3", "BSD-2","GPL","LGPL","MIT","None"]
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
