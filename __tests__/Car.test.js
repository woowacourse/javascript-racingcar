const { GAME_NUMBER } = require('../src/constants');
const Car = require('../src/domain/model/Car');

describe('Car 모델 테스트', () => {
  const car = new Car('제로');
  const GO = true;
  const STAY = false;
  const MOVE_NUMBER = GAME_NUMBER.moveStandard;
  const MOVE_NOT_NUMBER = GAME_NUMBER.moveStandard - 1;

  car.setProgress();
  car.setProgress();

  test('getName 함수 테스트', () => {
    expect(car.getName()).toBe('제로');
  });

  test('getProgress 함수 테스트', () => {
    expect(car.getProgress()).toEqual(['-', '-']);
  });

  test.each([
    [MOVE_NUMBER, GO],
    [MOVE_NOT_NUMBER, STAY],
  ])('isMove 함수 테스트: %s일 때 %s 반환', (number, expected) => {
    expect(Car.isMove(number)).toBe(expected);
  });
});
