import getRandomValueInRange from '../src/utils/getRandomValueInRange.js';

describe('랜덤 값 테스트', () => {
  test('랜덤으로 생성한 변수가 지정한 범위 내에 있는지 확인한다.', () => {
    const MIN_VALUE = 0;
    const MAX_VALUE = 9;

    expect(getRandomValueInRange(MIN_VALUE, MAX_VALUE)).toBeGreaterThanOrEqual(
      MIN_VALUE,
    );
    expect(getRandomValueInRange(MIN_VALUE, MAX_VALUE)).toBeLessThanOrEqual(
      MAX_VALUE,
    );
  });
});
