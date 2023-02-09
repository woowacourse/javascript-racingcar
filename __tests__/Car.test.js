const Car = require('../src/Models/Car');

test('Car Class 테스트', () => {
  // given
  const car = new Car('garam');
  const numbers = [1, 3, 4, 5, 6, 2, 0];
  const resultPosition = 3;

  // when
  numbers.forEach(number => {
    car.move(number);
  });

  // then
  expect(car.getPosition()).toEqual(resultPosition);
});
