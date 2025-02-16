import Car from '../src/domain/Car.js';
describe('자동차 테스트', () => {
  test('자동차 객체를 만들 수 있다.', () => {
    const car = new Car('mato');

    expect(car.getName()).toBe('mato');
  });

  test('자동차는 전진할 수 있다.', () => {
    const car = new Car('mato');
    car.move();

    expect(car.getCarPosition()).toBe(1);
  });
});
