import { generateRandomNumber } from "../src/utils/utils.js";

test("시작과 끝 숫자를 포함한 범위 내의 숫자가 반환된다.", () => {
  const start = 1;
  const end = 9;

  const number = generateRandomNumber(start, end);

  expect(number).toBeGreaterThanOrEqual(start);
  expect(number).toBeLessThanOrEqual(end);
});
