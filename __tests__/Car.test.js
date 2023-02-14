const Car = require('../src/domain/Car');
const { NOT_MOVED, MOVE_FORWARD } = require('../src/constants');
describe('자동차 움직임 테스트', () => {
  const car = new Car('타미');
  test.each([0, 3])(
    '0~3 사이의 값이 들어오면 자동차는 움직이지 않는다. %#',
    (testCase) => {
      expect(car.move(testCase)).toBe(NOT_MOVED);
    }
  );

  test.each([4, 9])(
    '4~9 사이의 값이 들어오면 자동차가 전진한다. %#',
    (testCase) => {
      expect(car.move(testCase)).toBe(MOVE_FORWARD);
    }
  );
});
