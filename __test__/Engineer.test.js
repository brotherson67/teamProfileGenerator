const Engineer = require("../lib/Engineer");

test("create engineer object", () => {
  const engineer = new Engineer("John", 1, "john@fakemail.com", "gitUser");
  expect(engineer.name).toBe("John");
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer role", () => {
  const engineer = new Engineer("John", 1, "john@fakemail.com", "gitUser");
  expect(engineer.showRole()).toBe("Engineer");
});

test("get engineer github", () => {
  const engineer = new Engineer("John", 1, "john@fakemail.com", "gitUser");
  expect(engineer.showGithub()).toBe(`https://github.com/${engineer.github}`);
});
