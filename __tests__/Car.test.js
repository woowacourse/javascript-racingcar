import Car from "../src/domain/Car.js";

describe("Car 클래스 테스트", () => {
  test("이름이 '룩소'인 자동차 생성, 이동 거리의 초기값은 0", () => {
    const car = new Car("룩소");

    expect(car.getName()).toBe("룩소");
    expect(car.getCurrentDistance()).toBe(0);
  });

  test("무작위 값이 4 이상이면 1칸 이동", () => {
    const car = new Car("룩소");

    car.move(4);

    expect(car.getCurrentDistance()).toBe(1);
  });
});
