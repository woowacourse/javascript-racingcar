/* eslint-disable max-lines-per-function */
/* eslint-disable no-undef */
const Car = require('../src/domain/Car');

describe('Car Test', () => {
  test.each([
    ['yun', [0, 0, 4], 1],
    ['ga', [10, 11], 2],
  ])('자동차 전진 검사', (name, numbers, expected) => {
    const car = new Car(name);
    numbers.forEach(number => car.move(number));
    expect(car.getPosition()).toBe(expected);
  });
});
