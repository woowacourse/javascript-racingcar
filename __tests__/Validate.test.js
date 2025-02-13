import Validate from "../src/Validate.js";

describe("validate 테스트", () => {
  let validate;

  beforeAll(() => {
    validate = new Validate();
  });

  test.each([
    ["aaaa", true],
    ["aaaaa", true],
    ["aaaaaa", false],
    ["aaaaaaaaaa", false],
  ])("차 이름의 길이가 5자 이하인지 확인한다.", (raceCarName, result) => {
    if (result) {
      expect(() => validate.isBelowLimit(raceCarName)).not.toThrow();
    } else {
      expect(() => validate.isBelowLimit(raceCarName)).toThrow();
    }
  });

  test("차 이름이 빈값이 아닌지 확인한다", () => {
    expect(() => validate.isPositiveLength("")).toThrow();
    expect(() => validate.isPositiveLength("aa")).not.toThrow();
  });

  test("실행횟수가 양수인지 확인한다", () => {
    expect(() => validate.isPositiveNumber(-1)).toThrow();
    expect(() => validate.isPositiveNumber(1)).not.toThrow();
  });

  test("실행횟수가 숫자인지 확인한다", () => {
    expect(() => validate.isNumeric(2)).not.toThrow();
    expect(() => validate.isNumeric(NaN)).toThrow();
  });

  test("실행횟수가 정수수인지 확인한다", () => {
    expect(() => validate.isInteger(1.1)).toThrow();
    expect(() => validate.isInteger(2)).not.toThrow();
  });
});
