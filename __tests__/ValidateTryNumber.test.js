import ValidateTryNumber from "../src/validator/ValidateTryNumber.js";

describe("Validator 시도 횟수 테스트", () => {
  const validateTryNumber = new ValidateTryNumber();

  test("시도 횟수가 1보다 작으면 오류가 발생한다.", () => {
    const tryNumber = 0;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });

  test("시도 횟수가 100보다 크면 오류가 발생한다.", () => {
    const tryNumber = 101;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });

  test("시도 횟수가 양의 정수가 아닌 경우 오류가 발생한다.", () => {
    const tryNumber = 1.5;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });
});
