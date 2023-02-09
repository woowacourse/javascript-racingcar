import Car from '../src/models/Car';

describe('Car', () => {
  test('자동차는 이름을 가질 수 있고 전진할 수 있어야 한다.', () => {
    // given
    const car = new Car('Test');

    // when
    car.move();

    // then
    const { name, position } = car.getRaceState();
    expect(name).toBe('Test');
    expect(position).toBe(1);
  });
});
