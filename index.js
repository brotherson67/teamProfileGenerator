// global variables/imports
const inquirer = require("inquirer");
const { Manager, Engineer, Intern } = require("./lib/index");
const generatePage = require("./src/page-template");
const { writeFile } = require("./src/file-transfer");

const employees = [];

const initQuestion = () => {
  return inquirer

    .prompt([
      {
        type: "list",
        name: "action",
        message: "What's would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Quit"],
      },
    ])
    .then((answer) => {
      if (answer.action === "Quit") {
        console.log("Done!"); // build web Page
        return employees;
      } else if (answer.action === "Add Engineer") {
        return engineerQuestions();
      } else if (answer.action === "Add Intern") {
        return internQuestions();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const managerQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "name",
        message: "Hi what's your name?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "what's your office number",
      },
      {
        type: "intput",
        name: "email",
        message: "What's your email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's your employee id?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.officeNumber,
        answers.email,
        answers.employeeId
      );
      employees.push(manager);
      //then run function to see if user wants to add more employees
      return initQuestion();
    })
    .catch((err) => {
      console.log(err);
    });
};

const engineerQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the Engineers name?",
      },
      {
        type: "input",
        name: "github",
        message: "What's their github username?",
      },
      {
        type: "intput",
        name: "email",
        message: "What's their email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's their employee id?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.github,
        answers.email,
        answers.employeeId
      );
      employees.push(engineer);

      return initQuestion();
    })
    .catch((error) => {
      console.log(error);
    });
};

const internQuestions = () => {
  return inquirer

    .prompt([
      {
        type: "input",
        name: "name",
        message: "What's the Intern's name?",
      },
      {
        type: "input",
        name: "school",
        message: "What school do they go to?",
      },
      {
        type: "intput",
        name: "email",
        message: "What's their email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "what's their employee id?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.school,
        answers.email,
        answers.employeeId
      );
      employees.push(intern);
      //then run function to see if user wants to add more employees
      return addEmployee();
    })
    .catch((err) => {
      console.log(err);
    });
};

managerQuestions()
  .then((employees) => {
    return generatePage(employees);
  })
  .then((pageHTML) => {
    console.log(pageHTML);
    writeFile(pageHTML);
  });
