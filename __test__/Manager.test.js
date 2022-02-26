const Employee = require("../js/employeeTypes");

test("test if returned value is a string ", () => {
  const employee = new Employee();

  expect(employee.job).toBe(expect.any(String));
});

test("are the values for the Name, address, email and id string ", () => {
  const manager = new Manager();

  expect(manager.name).toBe(expect.any(String));
  expect(manager.employeeId).toBe(expect.any(String));
  expect(manager.address).toBe(expect.any(String));
  expect(manager.officeNumber).toBe(expect.any(String));
});
