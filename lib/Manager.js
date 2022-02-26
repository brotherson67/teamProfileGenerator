class Manager {
  constructor(Questions, name, email, employeeId, officeNumber) {
    this.name = Questions.name;
    this.email = Questions.managerEmail;
    this.employeeId = Questions.employeeId;
    this.officeNumber = Questions.officeNumber;
    // DOES THIS NEED TO BE A FUNCTION TO BE A METHOD?
    this.Questions = [
      {
        type: "input",
        name: "manager-name",
        message: "Hey manager, what's your name?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is your email?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is your employee id??",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ];
  }
}
// create questions array for user

module.exports = Manager;
