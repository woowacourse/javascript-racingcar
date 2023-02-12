const Random = require('../../src/utils/Random');

describe('랜덤 숫자 생성 테스트', () => {
  test('생성된 숫자들은 0과 같거나 크다.', () => {
    const numbers = Array.from({ length: 10 }).map(() =>
      Random.generateNumber()
    );

    numbers.forEach(number => expect(number).toBeGreaterThanOrEqual(0));
  });

  test('생성된 숫자들은 10과 같거나 작다.', () => {
    const numbers = Array.from({ length: 10 }).map(() =>
      Random.generateNumber()
    );

    numbers.forEach(number => expect(number).toBeLessThanOrEqual(10));
  });
});
