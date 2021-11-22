// global variables/imports
const fs = require('fs');
const inquirer = require ('inquirer');


// create questions array for user
let questions = [
    {
        type: 'input',
        name: 'manager-name', 
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'employee-name', 
        message: 'What is the employees name name?'
    },
    {
        type: 'input',
        name: 'employeeID', 
        message: 'What is their employee ID?'
    },{
        type: 'input',
        name: 'email', 
        message: 'What is their email address?'
    },{
        type: 'input',
        name: 'github', 
        message: 'What is their GitHub username?'
    },
    {
        type: 'input',
        name: 'officeNumber', 
        message: 'What is their office number?'
    },
    {
        type: 'list',
        message: 'What is the managers name?',
        name: 'employeePosition', 
        choices: ['Engineer', 'Intern', "I don't have any more employees to add"]
    },
]

// classes 
class employee {
    constructor(name, position, employeeID, email, github, school){
        this.name = name; 
        this.position = position;
        this.employeeID = employeeID;
        this.email = email;
        this.github = github;
        this.school = school;
    }
    
};


// Functions

const startHTML = () => {
    let divContents = 
    `<!DOCTYPE html>
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
        </nav>`
};

const newDiv = (employeeTitle) => {
    const employeeName = employee.name;
    const employeePosition = employee.position;
    const employeeID = employee.employeeID;
    const employeeEmail = employee.email;
    const employeeGithub = employee.github;
    const employeeSchool = employee.school;
    let divContents = "";
    divContents = 
        `<div class="card" style="width: 18rem;">
            <h2>managers name</h2>>
            <h3>Manager</h3>
            <ul>
                <li>Employee ID</li>
                <li>Email</li>
                <li>Office Number</li>
            </ul>
        </div>`
    if (employeeTitle === "Engineer"){
        divContents = 
            `<div class="card" style="width: 18rem;">
                <h2>${employeeName}</h2>>
                <h3>${employeePosition}</h3>
                <ul>
                    <li>${employeeID}</li>
                    <li>${employeeEmail}</li>
                    <li>${employeeGithub}</li>
                </ul>
            </div>`
    }
    if (employeeTitle === "Intern"){
        divContents = 
            `<div class="card" style="width: 18rem;">
                <h2>${employeeName}</h2>>
                <h3>${employeePosition}</h3>
                <ul>
                    <li>${employeeID}</li>
                    <li>${employeeEmail}</li>
                    <li>${employeeSchool}</li>
                </ul>
            </div>`
    }
};

const endHTML = () => {
    let divContents = 
    `</body>
    </html>`
}