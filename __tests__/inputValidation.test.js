import { ERROR_MESSAGE } from "../src/constants/error.js";
import { validateCarNames, validateTryCount } from "../src/utils/validation.js";

describe("자동차 이름 잘못 입력시 예외 테스트", () => {
  test("자동차 이름을 쉼표(,)로 구분하지 않을시 예외가 발생한다.", () => {
    expect(() => validateCarNames("자동차.자동자")).toThrow(
      `[ERROR] ${ERROR_MESSAGE.INVALID_NAME_SEPARATOR}`,
    );
  });

  test("빈값 입력시 예외가 발생한다.", () => {
    expect(() => validateCarNames("")).toThrow(
      `[ERROR] ${ERROR_MESSAGE.EMPTY_INPUT}`,
    );
  });

  test("자동차 이름은 한글자 이상 다섯글자 이하가 아닐시 예외가 발생한다.", () => {
    expect(() => validateCarNames("가나다라마바")).toThrow(
      `[ERROR] ${ERROR_MESSAGE.INVALID_NAME_LENGTH}`,
    );
  });
});

test.each(["자동차.", "0", "-2"])(
  `잘못된 시도 횟수 입력시 예외가 발생한다. (%s)`,
  (input) => {
    expect(() => validateTryCount(input)).toThrow(
      `[ERROR] ${ERROR_MESSAGE.INVALID_TRY_COUNT}`,
    );
  },
);
