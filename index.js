// global variables/imports
const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./lib/index");
const generatePage = require("./src/page-template");
const { writeFile } = require("./src/file-transfer");

// console.log(managerInfo().role);

// ADD FUNCTIONS TO CREATE OBJECTS HERE
// POSSIBLE PLAN
// CREATE FUNCITONS TO EXTEND CLASSES AND PASS IN VALUES FROM INQUIRER
// FOR EACH CLASS RETURN AN HTML OBJECT THAT WILL BE PUSHED INTO
// A MASTER HTML DOC

const managerQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Hi what's your name?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what's your office number",
      },
      {
        type: "intput",
        name: "managerEmail",
        message: "What's your email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's your employee id?",
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.log(err);
    });
};

const engineerQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What's the Engineers name?",
      },
      {
        type: "input",
        name: "github",
        message: "What's their github username?",
      },
      {
        type: "intput",
        name: "engineerEmail",
        message: "What's their email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's their employee id?",
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.log(err);
    });
};

const internQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What's the Intern's name?",
      },
      {
        type: "input",
        name: "school",
        message: "What school do they go to?",
      },
      {
        type: "intput",
        name: "internEmail",
        message: "What's their email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's their employee id?",
      },
    ])
    .then((answers) => {
      console.log(answers);
    })
    .catch((error) => {
      console.log(err);
    });
};

const initQuestions = () => {
  return (
    inquirer
      //
      .prompt([
        {
          type: "list",
          name: "action",
          message: "What's would you like to do?",
          choices: ["Add Engineer", "Add Intern", "Quit"],
        },
      ])
      .then((answers) => {
        console.log(answers);
      })
      .catch((error) => {
        console.log(err);
      })
  );
};
// managerQuestions()
