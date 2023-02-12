const Car = require('../../src/domain/models/Car');

describe('Car', () => {
  test('전진시 위치가 1 증가한다', () => {
    const car = new Car('sy');

    car.move();

    expect(car.getPosition()).toBe(1);
  });
});
