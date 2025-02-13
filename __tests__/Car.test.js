import Car from '../src/Models/Car.js';

describe('Car 객체를 테스트', () => {
  test('객체가 잘 생성됐는지 확인한다.', () => {
    // given

    // when
    const car = new Car('재오');

    // then
    expect(car.name).toBe('재오');
  });
});
