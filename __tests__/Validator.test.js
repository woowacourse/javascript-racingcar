import {
  inputCarNameValidator,
  tryCountValidator,
} from "../src/Validator/Validator.js";

describe("예외 테스트", () => {
  test.each([
    ["가나"],
    ["가나다라마바사", "가나"],
    ["가나", "가나"],
    ["^^", "??"],
    ["ㄱ", "ㄴ"],
    ["0.3", "0.2"],
    [0.3, 0.2],
    [" ", "가나"],
    ["", "가나"],
  ])(
    "자동차 이름을 2개 이상 입력하지 않거나 올바른 자동차 이름을 입력하지 않으면 예외가 발생한다.",
    (carName) => {
      expect(() => inputCarNameValidator(carName)).toThrow(Error);
    },
  );

  test.each([
    "-1",
    "백 번",
    "0",
    "DD",
    "0.1",
    "..",
    " ",
    "2e3",
    "2.3",
    NaN,
    undefined,
    null,
  ])(
    "시도 횟수에 양수가 아닌 값을 입력하지 않으면 예외가 발생한다.",
    (tryCount) => {
      expect(() => tryCountValidator(tryCount)).toThrow(Error);
    },
  );
});
