const Car = require('../src/model/Car');

describe('Car 모델 테스트', () => {
  const car = new Car('제로');

  Array.from({ length: 2 }).forEach(() => {
    car.setProgress();
  });

  test('자동차 이름을 조회하는 기능(getName) 테스트', () => {
    expect(car.getName()).toBe('제로');
  });

  test('자동차 경주 게임 진행도를 조회하는 기능(getProgress) 테스트', () => {
    expect(car.getProgress()).toEqual(['-', '-']);
  });
});
