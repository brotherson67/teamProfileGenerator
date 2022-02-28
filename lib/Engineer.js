class Engineer {
    constructor(name, employeeID, email, github, officeNumber) {
        this.name = name;
        this.position = "Engineer";
        this.employeeID = employeeID;
        this.email = email;
        this.github = github;
    }
    showName() {
        return {
            name: this.name
        }
    }
    showId() {
        return {
            employeeId = this.employeeID
        }
    }
    showEmail() {
        return {
            email = this.email
        }
    }
    showRole() {
        return "Engineer"
    }
    showGithub() {
        return `https://github.com/${this.github}`
    }
}

module.exports = Engineer;