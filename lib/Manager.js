// create questions array for user
function Questions() {
  this.questions = [
    {
      type: "input",
      name: "manager-name",
      message: "Hey manager, what's your name?",
    },
    {
      type: "input",
      name: "manager-email",
      message: "What is your email?",
    },
    {
      type: "input",
      name: "employee-id",
      message: "What is your employee id??",
    },
    {
      type: "input",
      name: "office-number",
      message: "What is your office number?",
    },
  ];
}

module.exports = Questions;
