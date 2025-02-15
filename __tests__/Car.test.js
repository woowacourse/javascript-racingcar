import Car from "../src/domains/Car.js";

test.each([
  ["자동차는 움직인다.", true, 1],
  ["자동차는 움직이지 않는다.", false, 0],
])("%s", (_, isCanMove, expectedPosition) => {
  const car = new Car();

  car.move(isCanMove);

  expect(car.getPosition()).toBe(expectedPosition);
});
