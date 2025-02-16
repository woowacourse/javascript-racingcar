import randomNumber from "../src/util/random.js";
import { MIN, MAX } from "../src/constant/range.js";

test(`랜덤으로 생성된 숫자는 ${MIN.RANDOM_NUMBER}에서 ${MAX.RANDOM_NUMBER} 사이의 숫자이다.`, () => {
  const randomNum = randomNumber();

  expect(randomNum).toBeGreaterThanOrEqual(MIN.RANDOM_NUMBER);
  expect(randomNum).toBeLessThanOrEqual(MAX.RANDOM_NUMBER);
});
