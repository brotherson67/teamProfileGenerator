// global variables/imports
const fs = require("fs");
const inquirer = require("inquirer");
const { Manager } = require("./lib");

const manager = new Manager();
// console.log(manager.questions());
manager.questions();

inquirer
  // can i inansiate an due the manager/other question methods here?

  .prompt([
    /* Pass your questions in here */
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
