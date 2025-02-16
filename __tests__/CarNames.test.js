import { ERROR_MESSAGE } from "../src/constants.js";
import { validateCarNames } from "../src/domain/validate.js";

describe("자동차 이름 예외 테스트", () => {
  test("5자를 초과하는 경우", () => {
    expect(() => {
      validateCarNames(["meowww"]);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
  });

  test("10대를 초과하는 경우", () => {
    const carNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

    expect(() => {
      validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGE.TOO_MANY_CARS);
  });

  test("중복되는 경우", () => {
    const carNames = ["A", "B", "B"];

    expect(() => {
      validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATE);
  });

  test("공백이 입력되는 경우", () => {
    const carNames = ["A", "", "B"];

    expect(() => {
      validateCarNames(carNames);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_TOO_SHORT);
  });
});


describe("자동차 이름 정상 테스트", () => {
  test("5자를 초과하지 않는 경우", () => {
    [["meoww"], ["s"]].forEach((names) => {
      expect(() => {
        validateCarNames(names);
      }).not.toThrow();
    });
  });

  test("10대를 초과하지 않는 경우", () => {
    expect(() => {
      validateCarNames(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
    }).not.toThrow();
  })
});
