import Car from '../src/domain/Car.js';

describe('Car 객체를 테스트', () => {
  test('객체가 잘 생성됐는지 확인한다.', () => {
    // given

    // when
    const car = new Car('재오');

    // then
    expect(car.name).toBe('재오');
  });

  test('자동차 위치 history 저장 테스트', () => {
    // when
    const car = new Car('재오');
    car.move();
    car.move();

    // then
    expect(car.position).toEqual(2);
  });
});
