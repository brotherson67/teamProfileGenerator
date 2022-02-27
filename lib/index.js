const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Hey manager, whats your name?",
  },
  {
    type: "input",
    email: "email",
    message: "alright, whats your email?",
  },
  {
    type: "input",
    employeeId: "employeeId",
    message: "OK, please enter your employee id",
  },
  {
    type: "input",
    officeNumber: "officeNumber",
    message: "Now what's your office number?",
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Hey manager, whats your name?",
  },
  {
    type: "input",
    email: "email",
    message: "alright, whats your email?",
  },
  {
    type: "input",
    employeeId: "employeeId",
    message: "OK, please enter your employee id",
  },
  {
    type: "input",
    officeNumber: "officeNumber",
    message: "Now what's your office number?",
  },
];

function managerInfo() {
  inquirer.prompt(managerQuestions);
}

module.exports = { Manager };
