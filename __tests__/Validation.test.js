import {
  hasEmptyString,
  isLengthLongerThanFive,
  validateCount,
} from "../src/utils/validation.js";

describe("유효성 검사 테스트", () => {
  test("배열에 빈 문자열이 들어오면 false를 반환한다.", () => {
    const result = hasEmptyString([""]);
    expect(result).toBeTruthy();
  });

  test("빈 값이 들어오면 에러를 반환한다.", () => {
    expect(() => validateCount("").toThrow(ERROR.IS_TRY_COUNT_EMPTY));
  });

  test("자동차 이름이 5글자가 넘을 경우 true를 반환한다.", () => {
    const carArr = isLengthLongerThanFive(["abcdef"]);
    expect(carArr).toBeTruthy();
  });

  test("숫자가 아닌 값이 들어오면 에러를 반환한다.", () => {
    expect(() => validateCount("123").toThrow(ERROR.IS_NOT_NUMBER));
  });
});
