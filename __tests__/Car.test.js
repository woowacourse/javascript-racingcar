import Car from '../src/domain/Car.js';
import {
  MIN_NAME_LENGTH,
  MOVING_THRESHOLD,
} from '../src/constants/configurations.js';
import { ERROR_MESSAGE } from '../src/constants/systemMessages.js';

describe('자동차 객체 테스트', () => {
  const ENOUGH_VALUE = MOVING_THRESHOLD + 1;
  const NOT_ENOUGH_VALUE = MOVING_THRESHOLD - 1;

  test(`자동차의 이름이 ${MIN_NAME_LENGTH}자 이하가 아니면 오류가 발생한다.`, () => {
    expect(() => {
      new Car('asdfgh', 0);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  });

  test(`자동차의 이름에 공백이 있으면 오류가 발생한다.`, () => {
    expect(() => {
      new Car('as h', 0);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_SPACE);
  });

  test(`자동차의 이름이 알파벳으로 이루어지지 않으면 오류가 발생한다.`, () => {
    expect(() => {
      new Car('자동차', 0);
    }).toThrow(ERROR_MESSAGE.INVALID_NAME_CHARACTER);
  });

  test(`자동차의 위치가 0보다 작으면 오류가 발생한다.`, () => {
    expect(() => {
      new Car('car', -1);
    }).toThrow(ERROR_MESSAGE.INVALID_POSITION_MIN);
  });

  test(`자동차의 위치가 숫자가 아니면 오류가 발생한다.`, () => {
    expect(() => {
      new Car('car', 'a');
    }).toThrow(ERROR_MESSAGE.INVALID_POSITION_CHARACTER);
  });

  test('자동차는 자신의 이름과 위치를 표시할 수 있다.', () => {
    const car = new Car('test', 3);
    const { name, position } = car.getCarStatus();

    expect(name).toBe('test');
    expect(position).toBe(3);
  });

  test(`자동차는 주어지는 값이 ${MOVING_THRESHOLD} 이상인 경우 움직인다.`, () => {
    const car = new Car('car', 0);

    car.move(ENOUGH_VALUE);

    expect(car.getCarStatus().position).toBe(1);
  });

  test(`자동차는 주어지는 값이 ${MOVING_THRESHOLD} 미만인 경우 움직이지 않는다.`, () => {
    const car = new Car('car', 0);

    car.move(NOT_ENOUGH_VALUE);

    expect(car.getCarStatus().position).toBe(0);
  });
});
