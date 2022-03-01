// global variables/imports
const fs = require("fs");
const inquirer = require("inquirer");
const { managerInfo, engineerInfo, interInfo } = require("./lib/index");

// console.log(managerInfo().role);

const managerQuestions = () => {
    inquirer

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
            console.log(answers)
        })
        .catch((error) => {
            console.log(err)

        });
}


const engineerQuestions = () => {
    inquirer

        .prompt([{
                type: 'input',
                name: "engineerName",
                message: "What's the Engineers name?"
            },
            {
                type: 'input',
                name: "github",
                message: "What's their github username?"
            },
            {
                type: "intput",
                name: "engineerEmail",
                message: "What's their email?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "what's their employee id?"
            }
        ])
        .then((answers) => {
            console.log(answers)
        })
        .catch((error) => {
            console.log(err)

        });
}

// managerQuestions()