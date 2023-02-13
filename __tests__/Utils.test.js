const { isMove, calculateRandomNumber } = require('../src/utils');

describe('utils 테스트', () => {
  test.each([
    [4, true],
    [3, false],
    [1.7, false],
    [4.1, true],
  ])('isMove 함수 테스트: %s일 때 %s 반환', (number, expected) => {
    expect(isMove(number)).toBe(expected);
  });

  test('자동차 전진 여부와 관련된 랜덤 값을 반환하는 기능(calculateumber) 테스트', () => {
    Array.from({ length: 10 }).forEach(() => {
      expect(calculateRandomNumber()).toBeGreaterThanOrEqual(0);
      expect(calculateRandomNumber()).toBeLessThanOrEqual(9);
    });
  });
});
