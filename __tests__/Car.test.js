import { ERROR_MESSAGE } from "../src/config/constants.js";
import Car from "../src/domain/Car.js";

describe("자동차 이름 예외 테스트", () => {
  test("자동차 이름 최대 길이 예외 테스트", () => {
    expect(() => {
      new Car("happyyyyy");
    }).toThrow(new Error(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH));
  });

  test("자동차 이름 최소 길이 예외 테스트", () => {
    expect(() => {
      new Car("");
    }).toThrow(new Error(ERROR_MESSAGE.CAR_NAME_MIN_LENGTH));
  });

  test("자동차 이름 숫자 입력 예외 테스트", () => {
    expect(() => {
      new Car(1);
    }).toThrow(new Error(ERROR_MESSAGE.CAR_NAME_INVALID_NUMBER));
  });
});
