import Validator from "../src/Validator.js";

describe("Validator 자동차 이름, 자동차 갯수 테스트", () => {
  const validator = new Validator();
  test("자동차 이름이 5글자를 넘으면 오류가 발생한다.", () => {
    const carNames = ["pobi", "crong", "honux", "abcdef"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 이름이 1글자 미만이면 오류가 발생한다.", () => {
    const carNames = ["pobi", ""];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 갯수가 2개 미만이면 오류가 발생한다.", () => {
    const carNames = ["pobi"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });

  test("같은 자동차 이름을 입력하면 오류가 발생한다.", () => {
    const carNames = ["pobi", "pobi"];

    expect(() => validator.carNamesAndCount(carNames)).toThrow();
  });
});

describe("Validator 시도 횟수 테스트", () => {
  const validator = new Validator();

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
