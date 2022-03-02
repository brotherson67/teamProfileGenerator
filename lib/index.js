const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

module.exports = { Manager, Engineer, Intern };

// const manager = new Manager();
// const engineer = new Engineer();
// const intern = new Intern();

// const managerQuestions = [
//   {
//     type: "input",
//     name: "name",
//     message: "Hey manager, whats your name?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "alright, whats your email?",
//   },
//   {
//     type: "input",
//     name: "employeeId",
//     message: "OK, please enter your employee id",
//   },
//   {
//     type: "input",
//     name: "officeNumber",
//     message: "Now what's your office number?",
//   },
// ];

// const engineerQuestions = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's the name of your Engineer?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "alright, whats they're email?",
//   },
//   {
//     type: "input",
//     name: "employeeId",
//     message: "OK, please enter your employee id",
//   },
//   {
//     type: "input",
//     name: "github",
//     message: "Enter their Github username.",
//   },
// ];

// const internQuestions = [
//   {
//     type: "input",
//     name: "name",
//     message: "What's the name of your Intern?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "alright, whats they're email?",
//   },
//   {
//     type: "input",
//     name: "employeeId",
//     message: "OK, please enter your employee id",
//   },
//   {
//     type: "input",
//     name: "school",
//     message: "Enter the name of their school.",
//   },
// ];

// function managerInfo() {
//   inquirer
//     .prompt(managerQuestions)
//     .then((answers) => {
//       const manager = new Manager(
//         answers.name,
//         answers.email,
//         answers.employeeId,
//         answers.officeNumber
//       );
//       console.log(manager);
//       console.log(answers);
//     })
//     .catch((err) => console.log(err));
// }

// function engineerInfo() {
//   inquirer
//     .prompt(engineerQuestions)
//     .then((answers) => console.log(answers))
//     .catch((err) => console.log(err));
// }

// function internInfo() {
//   inquirer
//     .prompt(internInfo)
//     .then((answers) => console.log(answers))
//     .catch((err) => console.log(err));
// }

// module.exports = { managerInfo, engineerInfo, internInfo };
