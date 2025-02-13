import { validateCarNames, validateTryCount } from "../src/utils/validation.js";

describe("예외 테스트", () => {
  test.each(["", "01", "자동차.", "가나다라마바"])(
    `잘못된 자동차 이름 입력시 예외가 발생한다. (%s)`,
    (input) => {
      expect(() => validateCarNames(input)).toThrow("[ERROR]");
    },
  );

  test.each(["", "자동차.", "0", "-2"])(
    `잘못된 시도 횟수 입력시 예외가 발생한다. (%s)`,
    (input) => {
      expect(() => validateTryCount(input)).toThrow("[ERROR]");
    },
  );
});
