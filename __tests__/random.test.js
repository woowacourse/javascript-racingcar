import getRandomNumber0to9 from '../src/utils/getRandomNumber0to9.js';

describe('랜덤 값 테스트', () => {
  test('랜덤으로 생성한 변수가 지정한 범위 내에 있는지 확인한다.', () => {
    expect(getRandomNumber0to9()).toBeGreaterThanOrEqual(0);
    expect(getRandomNumber0to9()).toBeLessThanOrEqual(9);
  });
});
