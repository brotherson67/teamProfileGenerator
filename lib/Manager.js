const inquirer = require("inquirer");

class Manager {
  constructor(Questions, name, email, employeeId, officeNumber, test) {
    this.name = Questions.name;
    this.email = Questions.managerEmail;
    this.employeeId = Questions.employeeId;
    this.officeNumber = Questions.officeNumber;
    this.test = test;
  }
}
// create questions array for user

module.exports = Manager;
