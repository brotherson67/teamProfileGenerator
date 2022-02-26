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

//initialize inquirer
// add method to ask questions
// get managers name
// get managers email
// get managers id number
// give option to add, engineer, intern, employee or be done

//create employee question its possible to make this a class
// get

//        </nav>`;
//   fs.writeFile("./src/tests/team.html", html, function (err) {
//     if (err) {
//       console.log(err);
//     }
//   });
// }

// function endHTML() {
//   let divContents = `</body>
//     </html>`;
// }

// function addOrExit() {
//   inquirer.prompt(continueQuestions).then(function (data) {
//     if (data.addOrExit === "Yes") {
//       addEmployee();
//     } else {
//       endHTML();
//     }
//   });
// }
// // I've heard of this thing called recursion and I tried to implement it here.
// function addEmployee() {
//   inquirer.prompt(questions).then(function (data) {
//     newDiv();

//     addOrExit();
//   });
// }

// function init() {
//   startHTML();
// }
