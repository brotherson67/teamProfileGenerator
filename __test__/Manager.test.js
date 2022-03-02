const { Manager } = require("../lib");

test("create manager object", () => {
  const manager = new Manager("John", 1, "john@fakemail.com", 100);
  expect(manager.name).toBe("John");
  expect(manager.officeNumber).toBe(100);
});

test("get the manager role", () => {
  const manager = new Manager("John", 1, "john@fakemail.com", 100);
  expect(manager.showRole()).toBe("Manager");
});
