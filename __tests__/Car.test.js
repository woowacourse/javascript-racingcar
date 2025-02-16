import Car from "../src/domain/Car.js";

describe("Car 클래스 테스트", () => {
  const car = new Car("메타");

  test(`자동차 이름이 올바르게 저장 되었는지 테스트`, () => {
    expect(car.name).toBe("메타");
  });

  test("자동차는 이동할 수 있다", () => {
    car.move();
    expect(car.position).toBe(1);
  })
})