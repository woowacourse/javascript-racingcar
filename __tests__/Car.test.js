const Car = require('../src/domain/Car');

describe('자동차 클래스 테스트', () => {
  test.each([4, 5, 6, 7, 8, 9])(
    `무작위 값이 ${Car.PROGRESS_CONDITION_NUMBER} 이상인 경우 자동차는 한 칸 전진한다.`,
    (conditionNumber) => {
      const car = new Car('유스');

      car.tryProgress(conditionNumber);

      expect(car.getProgressCount()).toBe(1);
    },
  );

  test.each([0, 1, 2, 3])(
    `무작위 값이 ${Car.PROGRESS_CONDITION_NUMBER} 미만인 경우 자동차는 전진하지 않는다.`,
    (conditionNumber) => {
      const car = new Car('유스');

      car.tryProgress(conditionNumber);

      expect(car.getProgressCount()).toBe(0);
    },
  );
});
