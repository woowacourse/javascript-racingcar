import Car from '../src/Car.js';
import { MOVE_THRESHOLD } from '../src/constants/configurations.js';

const TEST_CAR_NAME = 'test';

describe('자동차 객체의 move 메서드 테스트', () => {
  test.each([0, 1, 2, 3])(
    '자동차는 주어지는 값이 %s인 경우 position이 변하지 않아야 한다.',
    (value) => {
      const car = new Car(TEST_CAR_NAME, 0);

      car.move(value);

      expect(car.getPosition()).toBe(0);
    },
  );

  test.each([4, 5, 6, 7, 8, 9])(
    '자동차는 주어지는 값이 %s인 경우 position이 1 증가해야 한다.',
    (value) => {
      // given
      const car = new Car(TEST_CAR_NAME, 0);

      // when
      car.move(value);

      // then
      expect(car.getPosition()).toBe(1);
    },
  );
});

describe('자동차 객체의 getRacingStatus 메서드 테스트', () => {
  test('현재 위치를 올바른 형식의 문자열로 반환해야 한다', () => {
    const car = new Car(TEST_CAR_NAME, 0);

    car.move(MOVE_THRESHOLD);
    car.move(MOVE_THRESHOLD);

    expect(car.getRacingStatus()).toBe(`${TEST_CAR_NAME} : --`);
  });

  test('position이 0일 때 대시를 출력하지 않아야 한다', () => {
    const car = new Car(TEST_CAR_NAME, 0);

    expect(car.getRacingStatus()).toBe(`${TEST_CAR_NAME} : `);
  });
});
