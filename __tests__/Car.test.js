const Car = require('../src/Domain/Car');

test('move 인자로 4이상의 수가 들어온다면 position을 1만큼 이동한다.', () => {
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
