import { validateMoveCount } from "../../src/utils/validateMoveCount.js";
import { ERROR } from "../../src/constants/messages.js";

describe("utils/valideMoveCount", () => {
  test.each([
    ["1", null],
    ["2", null],
    ["15", null],

    ["0", ERROR.INVALID_NUMBER],
    ["1.5", ERROR.INVALID_NUMBER],
    ["-5", ERROR.INVALID_NUMBER]
  ])("%s가 1 이상의 숫자인지 확인", (input, expectedError) => {
    if (expectedError) {
      expect(() => validateMoveCount(input)).toThrow(expectedError);
    } else {
      expect(() => validateMoveCount(input)).not.toThrow();
    }
  });
});
