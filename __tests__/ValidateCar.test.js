import ValidateCar from "../src/validator/ValidateCar.js";

describe("Validator 자동차 이름, 자동차 갯수 테스트", () => {
  const validateCar = new ValidateCar();
  test("자동차 이름이 5글자를 넘으면 오류가 발생한다.", () => {
    const carNames = ["pobi", "crong", "honux", "abcdef"];

    expect(() => validateCar.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 이름이 1글자 미만이면 오류가 발생한다.", () => {
    const carNames = ["pobi", ""];

    expect(() => validateCar.carNamesAndCount(carNames)).toThrow();
  });

  test("자동차 갯수가 2개 미만이면 오류가 발생한다.", () => {
    const carNames = ["pobi"];

    expect(() => validateCar.carNamesAndCount(carNames)).toThrow();
  });

  test("같은 자동차 이름을 입력하면 오류가 발생한다.", () => {
    const carNames = ["pobi", "pobi"];

    expect(() => validateCar.carNamesAndCount(carNames)).toThrow();
  });
});
