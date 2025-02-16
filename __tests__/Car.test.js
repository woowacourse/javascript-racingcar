import Car from '../src/domain/Car.js';

describe('자동차 테스트', () => {
  test('자동차는 만들어질수 있다.', () => {
    const car = new Car();
    // then
    expect(car).toBeDefined();
  });

  test('자동차는 초기에 0에 위치한다.', () => {
    const car = new Car();

    expect(car.position).toBe(0);
  });

  test('자동차는 랜덤 숫자가 3일때 전진하지 않는다', () => {
    const car = new Car();
    car.go(3);
    expect(car.position).toBe(0);
  });

  test('자동차는 랜덤 숫자가 4일때 전진한다.', () => {
    // given
    // when
    const car = new Car();
    car.go(4);
    expect(car.position).toBe(1);
  });
});
