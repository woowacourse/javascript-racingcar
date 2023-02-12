import Validator from "../src/domain/Validator.js";

describe("Validator 객체 테스트", () => {
  test("자동차의 이름 입력은 5글자 이하여야 한다.", () => {
    expect(() => {
      Validator.validateCarNames("코딩하는룩소,코딩하는아인");
    }).toThrow("[ERROR]");
  });

  test("시도 횟수 입력은 숫자여야 한다.", () => {
    expect(() => {
      Validator.validateTryCount("a");
    }).toThrow("[ERROR]");
  });

  test("시도 횟수 입력은 1 이상의 정수여야 한다.", () => {
    expect(() => {
      Validator.validateTryCount(-1);
    }).toThrow("[ERROR]");
  });
});
