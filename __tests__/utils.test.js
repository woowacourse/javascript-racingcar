import { generateRandomNumber } from "../src/utils";

test("0에서 9 사이의 랜덤한 정수가 반환된다.", () => {
  const result = generateRandomNumber();

  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThanOrEqual(9);
});
