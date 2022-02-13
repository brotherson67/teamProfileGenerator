const Employee = require("../js/employeeTypes");

test("test if returned value is a string ", () => {
  const employee = new Employee();

  expect(employee.job).toBe(expect.any(String));
});
