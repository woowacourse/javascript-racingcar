const { Random } = require('../src/utils');

describe('utils 테스트', () => {
  test('Random.getCarGameNumber 함수 테스트', () => {
    Array.from({ length: 10 }).forEach(() => {
      const randomNumber = Random.getCarGameNumber();

      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(9);
    });
  });
});
