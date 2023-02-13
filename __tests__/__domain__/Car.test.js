const Car = require('../../src/domain/Car');
const CarValidator = require('../../src/validator/CarValidator');
describe('Car', () => {
  test.each([0, 1, 2, 3])(
    '무작위 값이 3 이하일 때 전진하지 않는다.',
    condition => {
      const car = new Car('아커');
      car.move(condition);
      expect(car.position).toBe(0);
    }
  );

  test.each([4, 5, 6, 7, 8, 9, 10])(
    '무작위 값이 4 이상일 때 전진한다',
    condition => {
      const car = new Car('아커');
      car.move(condition);
      expect(car.position).toBe(1);
    }
  );

  const CORRECT_NAMES = ['a', 'ab', 'abc', 'abcd', 'abcde'];
  test.each(CORRECT_NAMES)('올바른 이름 케이스', name => {
    expect(() => CarValidator.checkName(name)).not.toThrow('[ERROR]');
  });

  const INCORRECT_NAMES = ['', '1', 'abcdef', '!', ' ', '\n'];
  test.each(INCORRECT_NAMES)('올바르지 못한 이름 케이스', name => {
    expect(() => CarValidator.checkName(name)).toThrow('[ERROR]');
  });

  const CORRECT_TRY_COUNT = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  test.each(CORRECT_TRY_COUNT)('올바른 try count 케이스', tryCount => {
    expect(() => CarValidator.checkTryCount(tryCount).not.toThrow('[ERROR]'));
  });

  const INCORRECT_TRY_COUNT = [0, 11, 555555555, BigInt, 'a', 'ㅁ'];
  test.each(INCORRECT_TRY_COUNT)('올바르지 못한 try count 케이스', tryCount => {
    expect(() => CarValidator.checkTryCount(tryCount).toThrow('[ERROR]'));
  });
});
