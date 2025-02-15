import pickRandomNumber from '../src/utils/pickRandomNumber.js';

test('0에서 9사이 숫자를 하나 반환한다.', () => {
  const randomNumber = pickRandomNumber();

  expect(randomNumber).toBeLessThanOrEqual(9);
  expect(randomNumber).toBeGreaterThanOrEqual(0);
});
