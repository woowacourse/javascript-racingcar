import Car from '../src/domain/Car.js';

describe('Car', () => {
  let car;

  beforeEach(() => {
    car = new Car('seo');
  });

  test('자동차에 이름을 부여할 수 있다.', () => {
    expect(car.getName()).toBe('seo');
  });

  test('자동차의 최초 위치는 0으로 시작한다.', () => {
    expect(car.getPosition()).toBe(0);
  });

  test('자동차는 무작위 숫자 4가 나올 경우 moveForward 함수를 호출시켜 전진할 수 있다.', () => {
    car.moveForward();

    expect(car.getPosition()).toBe(1);
  });
});
