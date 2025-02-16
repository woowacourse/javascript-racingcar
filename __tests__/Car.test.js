import Car from "../src/domains/Car.js";

test.each([
  ["자동차는 움직인다.", true, 1, "pobi"],
  ["자동차는 움직이지 않는다.", false, 0, "woni"],
])("%s", (_, isCanMove, expectedPosition, carName) => {
  const car = new Car(carName);

  car.move(isCanMove);

  expect(car.position).toBe(expectedPosition);
});

test.each([
  ["자동차의 이름은 1글자 이하인 경우 에러가 발생한다.", ""],
  ["자동차 이름은 6글자 이상인 경우 에러가 발생한다.", "여섯글자임다"],
])("%s", (_, carName) => {
  expect(() => {
    const car = new Car(carName);
  }).toThrow();
});

test.each([["2자"], ["세글자"], ["pobi"], ["pobii"]])(
  "자동차의 이름은 1글자 이상, 5글자 이하이어야 한다.",
  (carName) => {
    expect(() => {
      const car = new Car(carName);
    }).not.toThrow();
  }
);
