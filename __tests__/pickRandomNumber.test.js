import pickRandomNumber from '../src/utils/pickRandomNumber.js';

test('0에서 9사이 숫자를 하나 반환한다.', () => {
  pickRandomNumber();
  expect(pickRandomNumber()).toBeLessThanOrEqual(9);
  expect(pickRandomNumber()).toBeGreaterThanOrEqual(0);
});
