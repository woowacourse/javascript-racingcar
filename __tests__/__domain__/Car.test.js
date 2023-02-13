const Car = require('../../src/domain/Car');
describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car('sy');
  });
  test.each([0, 1, 2, 3])(
    '무작위 값이 3 이하일 때 전진하지 않는다.',
    condition => {
      const car = new Car('아커');
      car.move(condition);
      expect(car.position).toBe(0);
    }
  );

  test.each([4, 5, 6, 7, 8, 9, 10])(
    '무작위 값이 4 이상일 때 전진한다',
    condition => {
      const car = new Car('아커');
      car.move(condition);
      expect(car.position).toBe(1);
    }
  );
});
