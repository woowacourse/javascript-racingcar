const Car = require('../src/domain/Car');
const isBiggerThanStandard = require('../src/utils/isBiggerThanStandard');

describe('Car 테스트', () => {
  test('4이상이면 자동차가 이동한다.', () => {
    const car = new Car('pobi');
    expect(car.move(3, isBiggerThanStandard)).toBe(0);
    expect(car.move(4, isBiggerThanStandard)).toBe(1);
  });

  test('차의 현재 위치를 반환한다..', () => {
    const car = new Car('pobi');
    car.move(5, isBiggerThanStandard);
    expect(car.getState()).toBe(1);
  });

  test('차의 이름을 반환한다.', () => {
    const car = new Car('pobi');
    expect(car.getName()).toBe('pobi');
  });
});
