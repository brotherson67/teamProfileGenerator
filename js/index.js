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
    // place all html until after nav div
};

const newDiv = (employeeTitle) => {
    const employeeName = employee.name;
    const employeePosition = employee.position;
    const employeeID = employee.employeeID;
    const employeeEmail = employee.email;
    const employeeGithub = employee.github;
    const employeeSchool = employee.school;
    let divContents = "";
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
}