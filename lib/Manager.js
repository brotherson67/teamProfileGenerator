const inquirer = require("inquirer");

class Manager {
    constructor(name, email, employeeId, officeNumber) {
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
        this.officeNumber = officeNumber;
        this.role = "Manager";
    }
    showName() {
        return {
            name: this.name
        }
    }
    showId() {
        return {
            employeeId: this.employeeID
        }
    }
    showEmail() {
        return {
            email: this.email
        }
    }
    showRole() {
        return "Manager"
    }
    showOfficeNumber() {
        return {
            officeNumber: this.officeNumber
        }
    }
}
// create questions array for user

module.exports = Manager;