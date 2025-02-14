import Car from "../src/Car";
import { ERROR_MESSAGE } from "../src/constants";
import { validateAttempt, validateCarNames } from "../src/validate";

describe("예외 처리", () => {
  describe("자동차 이름 예외 처리", () => {
    test("자동차 이름 길이 예외 테스트", () => {
      expect(() => {
        new Car("happyyyyy");
      }).toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
    });

    test("자동차 개수 예외 처리", () => {
      const cars = new Array(11).fill({});
      const carNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

      expect(() => {
        validateCarNames(cars, carNames);
      }).toThrow(ERROR_MESSAGE.CAR_COUNT);
    });

    test("자동차 이름 중복 예외 처리", () => {
      const cars = [{}, {}, {}];
      const carNames = ["A", "B", "B"];

      expect(() => {
        validateCarNames(cars, carNames);
      }).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
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
