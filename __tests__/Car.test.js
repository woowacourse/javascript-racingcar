const Car = require('../src/domain/Car');

describe('자동차 클래스 테스트', () => {
  test('자동차 인스턴스를 생성한다.', () => {
    const carName = 'test';
    const car = new Car(carName);

    expect(car instanceof Car).toBe(true);
  });

  test('무작위 값이 4 이상인 경우 자동차를 전진', () => {
    const car = new Car('abc');

    car.tryProgress(4);

    expect(car.progressCount).toEqual(1);
  });
});
