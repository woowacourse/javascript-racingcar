import { ERROR_MESSAGE } from "../src/constants.js";
import { validateCarCount, validateCarNames } from "../src/domain/validate.js";

describe("자동차 이름 예외 테스트", () => {
  test("5자를 초과하는 경우", () => {
    expect(() => {
      validateCarNames(["meowww", "me"]);
    }).toThrow(ERROR_MESSAGE.CAR_NAME_TOO_LONG);
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
    [
      ["meoww", "aa"],
      ["s", "sssss"],
    ].forEach((names) => {
      expect(() => {
        validateCarNames(names);
      }).not.toThrow();
    });
  });
});

describe("자동차 개수 예외 테스트", () => {
  test("2대 미만인 경우", () => {
    const carNames = ["A"];

    expect(() => {
      validateCarCount(carNames);
    }).toThrow(ERROR_MESSAGE.TOO_FEW_CARS);
  });

  test("10대를 초과하는 경우", () => {
    const carNames = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];

    expect(() => {
      validateCarCount(carNames);
    }).toThrow(ERROR_MESSAGE.TOO_MANY_CARS);
  });
});

describe("자동차 개수 정상 테스트", () => {
  test("2대 이상인 경우", () => {
    expect(() => {
      validateCarCount(["I", "J"]);
    }).not.toThrow();
  });

  test("10대를 초과하지 않는 경우", () => {
    expect(() => {
      validateCarCount(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]);
    }).not.toThrow();
  });
});
