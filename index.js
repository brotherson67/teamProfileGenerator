// global variables/imports
const fs = require("fs");
const inquirer = require("inquirer");

// Initialize inquireer 2x
// the first time will be to ask the manager how many employees they have
// the second will be to generate the HTML page based on the response
// create an if statement within a for loo
// if i = 0- then create a manager page
// if i > 0 and  < response, create engineer
// if i > response create intern

const employees = (numberOfEmployees) => {};

// create questions array for user
let questions = [
  {
    type: "list",
    message: "What is the managers name?",
    name: "employeePosition",
    choices: ["Engineer", "Intern", "Manager"],
  },
  {
    type: "input",
    name: "employee-name",
    message: "What is the employees name name?",
  },
  {
    type: "input",
    name: "employeeID",
    message: "What is their employee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is their email address?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their GitHub username?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is their office number?",
  },
];

const continueQuestions = [
  {
    type: "list",
    message: "Would you like to add another employee?",
    name: "addOrExit",
    choices: ["Yes", "No"],
  },
];

// classes
class employee {
  constructor(name, position, employeeID, email, github, school) {
    this.name = name;
    this.position = position;
    this.employeeID = employeeID;
    this.email = email;
    this.github = github;
    this.school = school;
  }
}

// Functions
function startHTML() {
  let divContents = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>profileGenerator</title>
    </head>
    <body>
        <nav class=".navbar-brand text-center border-bottom">
            <div>
                <h1>Team Profiles</h1>
            </div>
        </nav>`;
  fs.writeFile("./src/tests/team.html", html, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function newDiv(employee) {
  const employeeName = employee.name;
  const employeePosition = employee.position;
  const employeeID = employee.employeeID;
  const employeeEmail = employee.email;
  const employeeGithub = employee.github;
  const employeeSchool = employee.school;
  let divContents = "";
  divContents = `<div class="card" style="width: 18rem;">
            <h2>managers name</h2>>
            <h3>Manager</h3>
            <ul>
                <li>Employee ID</li>
                <li>Email</li>
                <li>Office Number</li>
            </ul>
        </div>`;
  if (employeeTitle === "Engineer") {
    divContents = `<div class="card" style="width: 18rem;">
                <h2>${employeeName}</h2>>
                <h3>${employeePosition}</h3>
                <ul>
                    <li>${employeeID}</li>
                    <li>${employeeEmail}</li>
                    <li>${employeeGithub}</li>
                </ul>
            </div>`;
  }
  if (employeeTitle === "Intern") {
    divContents = `<div class="card" style="width: 18rem;">
                <h2>${employeeName}</h2>>
                <h3>${employeePosition}</h3>
                <ul>
                    <li>${employeeID}</li>
                    <li>${employeeEmail}</li>
                    <li>${employeeSchool}</li>
                </ul>
            </div>`;
  }
}

function endHTML() {
  let divContents = `</body>
    </html>`;
}

function addOrExit() {
  inquirer.prompt(continueQuestions).then(function (data) {
    if (data.addOrExit === "Yes") {
      addEmployee();
    } else {
      endHTML();
    }
  });
}
// I've heard of this thing called recursion and I tried to implement it here.
function addEmployee() {
  inquirer.prompt(questions).then(function (data) {
    newDiv();

    addOrExit();
  });
}

function init() {
  startHTML();
}
