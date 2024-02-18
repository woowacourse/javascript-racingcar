import Car from "../src/domain/Car.js";

describe("자동차 전진 테스트", () => {
  test.each([0, 1, 2, 3])("랜덤값이 4 미만이면 정지한다", (number) => {
    const car = new Car("파슬리");

    car.updateAdvance(number);
    expect(car.getAdvance()).toEqual(0);
  });

  test.each([4, 5, 6, 7, 8, 9])("랜덤값이 4 이상이면 한 칸 전진한다", (number) => {
    const car = new Car("파슬리");

    car.updateAdvance(number);
    expect(car.getAdvance()).toEqual(1);
  });
});
