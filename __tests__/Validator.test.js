const Validator = require("../src/validator/Validator");
const { inputCarNameValidator, tryCountValidator } = Validator;

const checkException = (testList, checkFunction) => {
  testList.forEach((test) => {
    expect(() => {
      checkFunction(test);
    }).toThrow(Error);
  });
};

describe("예외 테스트", () => {
  test("자동차 이름을 2개 이상 입력하지 않거나 올바른 자동차 이름을 입력하지 않으면 예외가 발생한다.", () => {
    const carNames = [
      ["가나"],
      ["가나다라마바사", "가나"],
      ["가나", "가나"],
      ["^^", "??"],
      ["ㄱ", "ㄴ"],
      ["0.3", "0.2"],
      [0.3, 0.2],
      [" ", "가나"],
      ["야미", "클린", ","],
    ];
    checkException(carNames, inputCarNameValidator);
  });

  test("시도 횟수에 양수가 아닌 값을 입력하지 않으면 예외가 발생한다.", () => {
    const tryCount = ["-1", "백 번", "0", "DD", "0.1", "..", " ", "2e3"];
    checkException(tryCount, tryCountValidator);
  });
});
