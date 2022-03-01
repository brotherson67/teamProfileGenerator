// global variables/imports
const fs = require("fs");
const inquirer = require("inquirer");
const { managerInfo, engineerInfo, interInfo } = require("./lib/index");

// console.log(managerInfo().role);

const managerQuestions = () => {
    inquirer
    // can i inansiate an due the manager/other question methods here?

        .prompt([{
                type: 'input',
                name: "managerName",
                message: "Hi what's your name?"
            },
            {
                type: 'input',
                name: "officeNumber",
                message: "what's your office number"
            },
            {
                type: "intput",
                name: "managerEmail",
                message: "What's your email?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "what's your employee id?"
            }
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}