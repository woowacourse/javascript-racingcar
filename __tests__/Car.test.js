import Car from "../src/Car";

test("랜덤 숫자가 4 이상일 경우 자동차는 움직인다.", () => {
  const car = new Car();

  jest.spyOn(Math, "random").mockReturnValue(0.5);
  car.move();

  expect(car.position).toBe(1);
});

test("랜덤 숫자가 4 미만일 경우 자동차는 움직일 수 없다.", () => {
  const car = new Car();

  jest.spyOn(Math, "random").mockReturnValue(0.2);
  car.move();

  expect(car.position).toBe(0);
});
