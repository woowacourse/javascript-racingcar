import { Validation } from "../src/validation/Validation.js";
describe("input validation test", () => {
  test("이름에 공백이 존재하는 경우 false를 반환한다", () => {
    //given
    const INPUT_VALUE = "a,b,,".split(",");

    //when
    const RESULT = Validation.isNameNotEmpty(INPUT_VALUE);

    //then
    expect(RESULT).toBe(false);
  });

  test("이름이 5자 이상인 경우 false를 반환한다", () => {
    //given
    const INPUT_VALUE = "abcdef".split(",");

    //when
    const RESULT = Validation.isNameTooLong(INPUT_VALUE);

    //then
    expect(RESULT).toBe(false);
  });
  test("이름에 중복이 존재하는 경우 false를 반환한다", () => {
    //given
    const INPUT_VALUE = "a,a,b,c".split(",");

    //when
    const RESULT = Validation.isNameDuplicate(INPUT_VALUE);

    //then
    expect(RESULT).toBe(false);
  });

  test("숫자가 아닌 경우 false를 반환한다", () => {});
  test("숫자가 음수인 경우 false를 반환한다", () => {});
});
