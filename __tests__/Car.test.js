const Car = require('../src/domain/Car');
const { CAR } = require('../src/utils/constants');

describe('Car 테스트', () => {
  test(`${CAR.MOVE_CONDITION}이상이면 자동차가 전진한다.`, () => {
    const car = new Car('pobi');
    expect(car.move(4)).toBe(1);
  });

  test(`${CAR.MOVE_CONDITION}미만이면 자동차가 전진하지 않는다.`, () => {
    const car = new Car('pobi');
    expect(car.move(3)).toBe(0);
  });
});
