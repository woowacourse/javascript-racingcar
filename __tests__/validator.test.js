import { ERROR_MESSAGE } from "../src/constants/message.js";
import Validator from "../src/Validator.js";

describe("Validator 자동차 이름, 자동차 갯수 테스트", () => {
  const validator = new Validator();
  test("자동차 이름은 5글자 이하이어야 한다.", () => {
    const carNames = ["pobi", "crong", "honux", "abcdef"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 이름은 1글자 이상이어야 한다.", () => {
    const carNames = ["pobi", ""];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 갯수는 최소 2개 이하이어야 한다.", () => {
    const carNames = ["pobi"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("같은 자동차 이름은 입력할 수 없다.", () => {
    const carNames = ["pobi", "pobi"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });
});

describe("Validator 시도 횟수 테스트", () => {
  const validator = new Validator();

  test("시도 횟수는 1보다 작을 수 없다.", () => {
    const tryNumber = 0;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });

  test("시도 횟수는 100보다 클 수 없다.", () => {
    const tryNumber = 101;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });

  test("시도 횟수는 양의 정수이어야 한다.", () => {
    const tryNumber = 1.5;
    expect(() => validator.tryNumber(tryNumber)).toThrow();
  });
});
