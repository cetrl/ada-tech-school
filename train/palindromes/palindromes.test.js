const isValidDate = require("./palindromes");

test("valid date format", () => {
  expect(isValidDate("03/04/2001")).toBe(true);
});

test("invalid date format - wrong length", () => {
  expect(isValidDate("3/4/2001")).toBe(false);
});

test("invalid date format - wrong separators", () => {
  expect(isValidDate("03-04-2001")).toBe(false);
});

test("invalid input - not a string", () => {
  expect(isValidDate(3042001)).toBe(false);
});

test("invalid date content", () => {
  expect(isValidDate("99/99/9999")).toBe(false);
});
