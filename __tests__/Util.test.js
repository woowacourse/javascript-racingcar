import { getRandomNumber } from "../src/Util.js";

test("0-9까지의 랜덤 숫자를 반환한다", () => {
  //when
  const randomNum = getRandomNumber();

  //then
  expect(randomNum).toBeLessThanOrEqual(9);
  expect(randomNum).toBeGreaterThanOrEqual(0);
});
