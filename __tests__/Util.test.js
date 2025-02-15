import { getRandomIntBetween } from "../src/util.js";

test("0-9까지의 랜덤 숫자를 반환한다", () => {
  //when
  const randomNum = getRandomIntBetween(0, 9);

  //then
  expect(randomNum).toBeLessThanOrEqual(9);
  expect(randomNum).toBeGreaterThanOrEqual(0);
});
