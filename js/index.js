const fs = require('fs');
const inquirer = require ('inquirer');
const employeeObjects = require('./employeeTypes');



// TODO: Create a function to write README file
function writeToFile(answers) {
    fs.writeFile(`teamProfileGen.HTML`, answers, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    } 

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(employeeObjects.questions)
        .then(function(answers) {
            const keepGoing = answers.employeeTitle;

            // generate a card that is just for the manager
            // then continue and see if next item is needed 
            // if the answer is not index it 2 ('no more employees') add more cards to the page 
            if (!keepGoing[2]){
                let addCard = answers.employee
            }
            const generateFile = generateMarkdown(answers)

            writeToFile(fileName, generateFile, (err) => {
                if (err) {
                    return console.log(err);
                }

                console.log('nice job man, you finally got it')
            })
        })
    
}

// Function call to initialize app
init();