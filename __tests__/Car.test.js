import Car from '../src/domain/Car.js';

describe('Car.move', () => {
  test('move 메서드를 실행하면, 기존 position필드 값이 1 증가하여야 한다.', () => {
    const car = new Car('');

    const beforePosition = car.getPosition();
    car.move();
    const afterPosition = car.getPosition();

    expect(afterPosition).toBe(beforePosition + 1);
  });
});
