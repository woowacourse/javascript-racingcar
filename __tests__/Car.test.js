import Car from "../src/domain/Car.js";

test(`자동차 이름이 올바르게 저장 되었는지 테스트`, () => {
  const car = new Car("메타의 람보르기니");
  expect(car.name).toBe("메타의 람보르기니");
});

test("자동차는 이동할 수 있다", () => {
  const car = new Car();
  car.move();
  expect(car.position).toBe(1);
});
