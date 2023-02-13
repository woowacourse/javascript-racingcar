const Attempts = require('../src/domain/model/Attempts');

describe('Attempts 모델 테스트', () => {
  const TEST_COUNT = 3;
  const attempt = new Attempts(TEST_COUNT);

  test('getAttemptsCount 함수 테스트', () => {
    expect(attempt.getAttemptsCount()).toBe(TEST_COUNT);
  });
});
