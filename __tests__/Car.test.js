const Car = require('../src/model/Car');

describe('Car 모델 테스트', () => {
  const car = new Car('제로');

  Array.from({ length: 2 }).forEach(() => {
    car.setProgress();
  });

  test('getName 함수 테스트', () => {
    expect(car.getName()).toBe('제로');
  });

  test('getProgress 함수 테스트', () => {
    expect(car.getProgress()).toEqual(['-', '-']);
  });
});
