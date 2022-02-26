const Manager = require("../js/employeeTypes");

test("are the values for the Name, address, email and id string ", () => {
  const manager = new Manager();

  expect(manager.name).toBe(expect.any(String));
  expect(manager.employeeId).toBe(expect.any(String));
  expect(manager.emailAddress).toBe(expect.any(String));
  expect(manager.officeNumber).toBe(expect.any(String));
});
