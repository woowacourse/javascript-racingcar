import getRandomValueInRange from '../src/utils/getRandomValueInRange.js';

describe('랜덤 값 테스트', () => {
  test('지정한 범위 내 랜덤으로 생성한 변수가 출력된다.', () => {
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
