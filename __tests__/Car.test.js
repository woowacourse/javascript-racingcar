const Car = require('../src/domain/model/Car');

describe('Car 모델 테스트', () => {
  const car = new Car('제로');

  car.setProgress();
  car.setProgress();

  test('getName 함수 테스트', () => {
    expect(car.getName()).toBe('제로');
  });

  test('getProgress 함수 테스트', () => {
    expect(car.getProgress()).toEqual(['-', '-']);
  });
});
