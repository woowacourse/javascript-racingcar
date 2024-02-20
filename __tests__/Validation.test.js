import { ERROR_MESSAGES } from "../src/constant/constant";
import Validation from "./../src/domain/Validation";

describe("유효성 검사", () => {
  test("자동차 이름에 중복된 이름을 넣은 경우 에러를 반환한다 ", () => {
    // Arrange
    const carNames = ["a", "b", "c", "c"];

    // Assert
    expect(() => {
      Validation.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.DUPLICATE);
  });
  test("자동차 이름 중 5글자 이하가 아닌 이름이 들어간 경우 에러를 반환한다", () => {
    // Arrange
    const carNames = ["a123456", "b"];

    // Assert
    expect(() => {
      Validation.validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGES.NAME_RANGE);
  });

  test("시도 횟수에 자연수가 아닌 값을 넣은 경우 에러를 반환한다", () => {
    // Arrange
    const tryNumber = "1a";

    // Assert
    expect(() => {
      Validation.validateTryNumber(tryNumber);
    }).toThrow(ERROR_MESSAGES.NATURAL_NUMBER);
  });
});
