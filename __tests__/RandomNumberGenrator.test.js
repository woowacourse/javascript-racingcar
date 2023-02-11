const Utils = require('../src/utils/Utils');

describe('RandomNumberGenerator 객체 테스트', () => {
  test('랜덤으로 생성된 숫자가 0과 9사이에 있는지 확인 ', () => {
    for (let i = 0; i < 100; i += 1) {
      const RANDOM_NUMBER = Utils.generateRandomNumber();

      expect(RANDOM_NUMBER).toBeGreaterThanOrEqual(0);
      expect(RANDOM_NUMBER).toBeLessThanOrEqual(9);
    }
  });
});
