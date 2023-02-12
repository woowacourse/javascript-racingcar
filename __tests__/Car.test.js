const Car = require('../src/domain/Car');

describe('Car 테스트', () => {
  test('4이상이면 자동차가 이동한다.', () => {
    const car = new Car('pobi');
    expect(car.move(3)).toBe(0);
    expect(car.move(4)).toBe(1);
  });
});
