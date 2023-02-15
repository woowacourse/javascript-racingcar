const Car = require('../src/model/Car');

test.each([0, 1, 2, 3])('전진하지 않는 경우', (condition) => {
  const car = new Car('에이든');

  car.move(condition);
  expect(car.position).toBe(1);
});

test.each([4, 5, 6, 7, 8, 9])('전진하는 경우', (condition) => {
  const car = new Car('에이든');

  car.move(condition);
  expect(car.position).toBe(2);
});
