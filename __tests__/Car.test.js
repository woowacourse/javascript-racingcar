/* eslint-disable no-undef */
const RacingCar = require('../src/domain/RacingCar');

describe('Racing car test', () => {
  test('자동차 이름 반환 테스트', () => {
    const car = new RacingCar('haeOn');
    expect(car.carName).toBe('haeOn');
  });

  test('전진 후 위치 반환 테스트', () => {
    const car = new RacingCar('haeOn');
    car.moveForward();
    expect(car.moveCount).toBe(2);
  });

  test('전진 하지 않았을 때 위치 반환 테스트', () => {
    const car = new RacingCar('haeOn');
    expect(car.moveCount).toBe(1);
  });
});
