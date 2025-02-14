import Car from '../src/Car.js';
import { MOVING_THRESHOLD } from '../src/constants/configurations.js';

describe('자동차 객체 테스트', () => {
  const ENOUGH_VALUE = MOVING_THRESHOLD + 1;
  const NOT_ENOUGH_VALUE = MOVING_THRESHOLD - 1;

  test(`자동차는 주어지는 값이 ${MOVING_THRESHOLD} 이상인 경우 움직인다.`, () => {
    const car = new Car('car', 0);

    car.move(ENOUGH_VALUE);

    expect(car.position).toBe(1);
  });

  test(`자동차는 주어지는 값이 ${MOVING_THRESHOLD} 미만인 경우 움직이지 않는다.`, () => {
    const car = new Car('car', 0);

    car.move(NOT_ENOUGH_VALUE);

    expect(car.position).toBe(0);
  });

  test('자동차는 현재 이동 거리를 문자열로 반환할 수 있다.', () => {
    const car = new Car('car', 0);

    car.move(ENOUGH_VALUE);
    car.move(ENOUGH_VALUE);
    car.move(NOT_ENOUGH_VALUE);

    expect(car.getRacingStatus()).toBe('car : --');
  });
});
