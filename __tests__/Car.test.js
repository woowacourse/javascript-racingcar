import { ERROR_MESSAGE } from "../src/config/constants.js";
import Car from "../src/domain/Car.js";

describe("자동차 이름 예외 테스트", () => {
  test("자동차 이름 길이 예외 테스트", () => {
    expect(() => {
      new Car("happyyyyy");
    }).toThrow(ERROR_MESSAGE.CAR_NAME_MAX_LENGTH);
  });
});
