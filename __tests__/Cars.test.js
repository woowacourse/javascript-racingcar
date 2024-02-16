import Cars from "../src/Cars";
import { ERROR } from "../src/constant/constant";

describe("자동차 이름 입력 테스트", () => {
  test("자동차 이름 리스트 중복 검사", () => {
    const carList = ["a", "b", "c", "c"];

    expect(() => {
      new Cars(carList);
    }).toThrow(ERROR.DUPLICATE);
  });

  test("자동차 이름이 5자를 초과하는 경우 예외를 던진다 ", () => {
    const carList = ["a", "b", "c", "c123456"];

    expect(() => {
      new Cars(carList);
    }).toThrow(ERROR.NAME_RANGE);
  });

  test("자동차 이름 제대로 입력되었을 때", () => {
    const carList = ["a", "b", "c", "d"];

    expect(() => {
      new Cars(carList);
    }).toBeTruthy();
  });

  test("자동차 리스트 출력 확인", () => {
    const carList = ["a", "b", "c", "d"];
    const cars = new Cars(carList);
    expect(cars.getCarList()).toEqual(["a", "b", "c", "d"]);
  });
});
