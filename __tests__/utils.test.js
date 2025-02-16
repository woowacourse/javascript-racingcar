import { generateRandomNumber } from "../src/utils/utils.js";

test("0에서 9 사이의 랜덤한 정수가 반환된다.", () => {
  for (let i = 0; i < 10000; i++) {
    const result = generateRandomNumber();

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(9);
  }
});
