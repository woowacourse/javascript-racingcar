import { RANDOM_NUMBER } from "../src/constants/Constants.js";
import { getRandomNumber } from "../src/utils/getRandomNumber.js";

test("getRandomNumber는 min과 max 사이의 숫자를 반환해야 한다.", () => {
  const max = RANDOM_NUMBER.MAX;
  const min = RANDOM_NUMBER.MIN;

  for (let i = 0; i < 100; i++) {
    const randomNum = getRandomNumber(min, max);

    expect(randomNum).toBeGreaterThanOrEqual(min);
    expect(randomNum).toBeLessThanOrEqual(max);
  }
});
