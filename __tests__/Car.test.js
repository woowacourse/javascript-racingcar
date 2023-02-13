const Car = require('../src/domain/Car');
describe('자동차 움직임 테스트', () => {
  const car = new Car('타미');
  test.each([0, 3])(
    '0~3 사이의 값이 들어오면 자동차는 움직이지 않는다. %#',
    (testCase) => {
      expect(car.move(testCase)).toBe('');
    }
  );

  test.each([4, 9])(
    '4~9 사이의 값이 들어오면 자동차가 전진한다. %#',
    (testCase) => {
      expect(car.move(testCase)).toBe('-');
    }
  );
});
