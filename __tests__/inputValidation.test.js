import { validateCarNames } from "../src/utils/validation.js";

describe("예외 테스트", () => {
  test.each(["", "01", "자동차."])(
    `잘못된 자동차 이름 입력시 예외가 발생한다. (%s)`,
    (input) => {
      expect(() => validateCarNames(input)).toThrow("[ERROR]");
    }
  );
});
