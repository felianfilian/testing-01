const cloneArray = require("./cloneArray");

test("test array to be equal", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array).toBe(array));
});
