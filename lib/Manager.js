const inquirer = require("inquirer");

class Manager {
  constructor(name, email, employeeId, officeNumber) {
    this.name = name;
    this.email = email;
    this.employeeId = employeeId;
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }
}
// create questions array for user

module.exports = Manager;
