const Car = require('../src/domain/Car');

describe('Car.move', () => {
  test('move 메서드를 실행하면, position필드 값이 1 증가하여야 한다.', () => {
    const car = new Car('');
    car.move();

    const position = car.getPosition();

    expect(position).toBe(1);
  });
});
