const Car = require('../src/domain/Car');

describe('Car객체 단위 테스트', () => {
  const car = new Car('nave');

  test('car 이름을 얻는 함수 테스트', () => {
    expect(car.getCarName()).toEqual('nave');
  });

  test('car의 현재 전진상태를 얻는 함수 테스트', () => {
    expect(car.getScore()).toEqual(0);
  });

  test('car가 전진했을 때 전진횟수 증가시키는 함수 테스트', () => {
    car.go();
    expect(car.getScore()).toEqual(1);
  });
});
