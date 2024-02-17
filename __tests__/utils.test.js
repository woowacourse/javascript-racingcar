import Random from '../src/utils/Random.js';

describe('랜덤 숫자 생성 테스트', () => {
  test('0에서 9 사이의 값을 생성한다', () => {
    const result = Random.pickNumberZeroToNine();

    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeLessThanOrEqual(9);
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
