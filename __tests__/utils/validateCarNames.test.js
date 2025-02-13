import {
  validateEmptyString,
  validateCarNameLength,
  validateDuplicate,
  validateLeastCars
} from "../../src/utils/validateCarNames.js";
import { ERROR } from "../../src/constants/messages.js";
import validateCarNames from "../../src/utils/validateCarNames.js";

describe("utils/valideCarNames", () => {
  test.each([
    ["a, b, c", ["a", "b", "c"]],
    ["a,b,c", ["a", "b", "c"]]
  ])("정상 입력", (input, expectedReturnValue) => {
    const result = validateCarNames(input);

    expect(result).toEqual(expectedReturnValue);
  });

  test("이름 입력에 빈 값이 들어온 경우", () => {
    // given
    const names = ["A", "B", "C", ""];

    // when & then
    expect(() => validateEmptyString(names)).toThrow(ERROR.EMPTY_STRING);
  });

  test.each([
    [[], ERROR.INVALID_CARS_LENGTH],
    [["a"], ERROR.INVALID_CARS_LENGTH],
    [["a", "b"], null]
  ])("%s가 최소 2대인지 확인", (input, expectedError) => {
    if (expectedError) {
      expect(() => validateLeastCars(input)).toThrow(expectedError);
    } else {
      expect(() => validateLeastCars(input)).not.toThrow();
    }
  });

  test.each([
    [["일이삼사오", "일이삼"], null],
    [["일이삼사오육", "일이삼"], ERROR.INVALID_CARNAME_LENGTH]
  ])("%s가 5자 이하인지 확인", (input, expectedError) => {
    if (expectedError) {
      expect(() => validateCarNameLength(input)).toThrow(expectedError);
    } else {
      expect(() => validateCarNameLength(input)).not.toThrow();
    }
  });

  test("차 이름이 중복인 경우", () => {
    // given
    const names = ["aa", "aa", "b", "c"];

    // when & then
    expect(() => validateDuplicate(names)).toThrow(ERROR.DUPLICATE_NAME);
  });
});
