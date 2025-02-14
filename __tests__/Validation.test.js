import { Validation } from "../src/validation/Validation.js";

describe("input validation test", () => {
  test("이름에 공백이 존재하는 경우 false를 반환한다", () => {
    const INPUT_VALUES = [" ", "", "   "];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isNameNotEmpty(value.split(","))).toBe(false);
    });
  });

  test("이름이 5자 초과인 경우 false를 반환한다", () => {
    const INPUT_VALUES = ["abcdef", "abcdefgh"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isNameTooLong(value.split(","))).toBe(false);
    });
  });

  test("이름에 중복이 존재하는 경우 false를 반환한다", () => {
    const INPUT_VALUES = ["a,a", "b,b,b", "c,d,c"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isNameDuplicate(value.split(","))).toBe(false);
    });
  });

  test("문자가 입력된 경우 false를 반환한다", () => {
    const INPUT_VALUES = ["a", "abc", "A", "Z", "1a"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isInteger(value)).toBe(false);
    });
  });

  test("정수가 아닌 경우 false를 반환한다", () => {
    const INPUT_VALUES = ["1.5", "0.1", "-1.2", "3.14159"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isInteger(value)).toBe(false);
    });
  });

  test("숫자가 음수인 경우 false를 반환한다", () => {
    const INPUT_VALUES = ["-1", "-100", "-99999"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isPositive(value)).toBe(false);
    });
  });

  test("유효한 정수인 경우 true를 반환한다", () => {
    const INPUT_VALUES = ["0", "1", "10", "99999"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isInteger(value)).toBe(true);
    });
  });

  test("양의 정수인 경우 true를 반환한다", () => {
    const INPUT_VALUES = ["1", "10", "99999"];
    INPUT_VALUES.forEach((value) => {
      expect(Validation.isPositive(value)).toBe(true);
    });
  });
});
