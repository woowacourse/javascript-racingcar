import Car from "../src/domains/Car.js";

test.each([
  ["자동차는 움직인다.", true, 1, "pobi"],
  ["자동차는 움직이지 않는다.", false, 0, "woni"],
])("%s", (_, isCanMove, expectedPosition, carName) => {
  const car = new Car(carName);

  car.move(isCanMove);

  expect(car.getPosition()).toBe(expectedPosition);
});

test.each([
  ["자동차의 이름은 1글자 이하여야 한다.", ""],
  ["자동차 이름은 5글자 이하여야 한다.", "여섯글자임다"],
])("%s", (_, carName) => {
  expect(() => {
    const car = new Car(carName);
  }).toThrow();
});
