
class employee {
    constructor(name, position, employeeID, email, github, officeNumber){
        this.name = name; 
        this.position = position;
        this.employeeID = employeeID;
        this.email = email;
        this.github = github;
        this.officeNumber = officeNumber;
    }
    
};

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
        name: 'employee-id', 
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
        name: 'office-number', 
        message: 'What is their office number?'
    },
    {
        type: 'list',
        message: 'What is the managers name?',
        name: 'employeeTitle', 
        choices: ['Engineer', 'Intern', "I don't have any more employees to add"]
    },
]


module.exports = employee;
module.exports = questions;