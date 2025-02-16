import Car from "../src/domain/Car.js";

test('자동차는 이름을 가져야 한다.', () => {
  const name = 'luna';

  const car = new Car(name);

  expect(car.getName()).toBe(name);
});

test("랜덤 숫자가 4 이상일 경우 자동차는 움직인다.", () => {
  const car = new Car();

  car.move(4);

  expect(car.getPosition()).toBe(1);
});

test("랜덤 숫자가 4 미만일 경우 자동차는 움직일 수 없다.", () => {
  const car = new Car();

  car.move(3);

  expect(car.getPosition()).toBe(0);
});
