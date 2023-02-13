const { isMove } = require('../src/domain/model/Car');
const { Random } = require('../src/utils');

describe('utils 테스트', () => {
  test.each([
    [4, true],
    [3, false],
    [1.7, false],
    [4.1, true],
  ])('isMove 함수 테스트: %s일 때 %s 반환', (number, expected) => {
    expect(isMove(number)).toBe(expected);
  });

  test('Random.getCarGameNumber 함수 테스트', () => {
    Array.from({ length: 10 }).forEach(() => {
      const randomNumber = Random.getCarGameNumber();

      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(9);
    });
  });
});
