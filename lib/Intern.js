class Intern {
    constructor(name, employeeId, email, school) {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.school = school;
        this.role = "Intern";
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
        return "Intern"
    }
    showSchool() {
        return {
            school: this.school
        }
    }
}

module.exports = Intern;