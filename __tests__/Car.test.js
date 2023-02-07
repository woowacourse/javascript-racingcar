const Car = require('../src/Car');

describe('자동차 클래스 테스트', () => {
  test('자동차 인스턴스를 생성한다.', () => {
    const carName = 'test';
    const car = new Car(carName);

    expect(car instanceof Car).toEqual(true);
  });
});
