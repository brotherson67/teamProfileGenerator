const fs = require('fs');
const inquirer = require ('inquirer');
const employeeObjects = require('./employeeTypes');

//create function to start HTML template
const startPage = () => {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <nav class=".navbar-brand text-center border-bottom">
            <div>
                <h1>Team Profiles</h1>
            </div>
        </nav>`
};

// create funciton to add each needed div
const addDiv = employeeTitle => {
    let employeeID = answers.employeeID
    let divToAdd = "";
    if (employeeTitle === 'Engineer') {
        divToAdd = 
        `<div class="card" style="width: 18rem;">
            <h2>engineer name</h2>>
            <h3>engineer</h3>
            <ul>
                <li>${employeeID}</li>
                <li>Email</li>
                <li>GitHub</li>
            </ul>
        </div>`
    }
}

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