import Car from '../src/domain/Car';

describe('Car', () => {
  test('자동차는 이름을 가질 수 있고 전진할 수 있어야 한다.', () => {
    // given
    const car = new Car('Test');

    // when
    car.move();

    // then
    expect(car.getName()).toBe('Test');
    expect(car.getPosition()).toBe(1);
  });
});
