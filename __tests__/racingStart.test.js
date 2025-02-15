import { ERROR_MESSAGE } from "../src/config/constants.js";
import { validateAttempt, validateCars } from "../src/utils/validate.js";

describe("예외 처리", () => {
  describe("자동차 예외 테스트", () => {
    test("자동차 이름 중복 예외 테스트", () => {
      const cars = [{}, {}, {}];
      const carNames = ["A", "B", "B"];

      expect(() => {
        validateCars(cars, carNames);
      }).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
    });

    test("자동차 개수 예외 처리", () => {
      const cars = new Array(11).fill({});
      const carNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

      expect(() => {
        validateCars(cars, carNames);
      }).toThrow(ERROR_MESSAGE.CAR_MAX_COUNT);
    });
  });

  describe("시도 횟수 예외 처리", () => {
    test("시도 횟수가 숫자가 아닌 경우 예외 처리", () => {
      expect(() => {
        validateAttempt(Number("p"));
      }).toThrow(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
    });

    test("시도 횟수가 음수인 경우 예외 처리", () => {
      expect(() => {
        validateAttempt(-1);
      }).toThrow(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
    });

    test("시도 횟수가 50회를 초과할 경우 예외 처리", () => {
      expect(() => {
        validateAttempt(51);
      }).toThrow(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
    });
  });
});
