import { getLongestString, getRandomIntBetween } from "../src/util.js";

test("0-9까지의 랜덤 숫자를 반환한다", () => {
  //when
  const randomNum = getRandomIntBetween(0, 9);

  //then
  expect(randomNum).toBeLessThanOrEqual(9);
  expect(randomNum).toBeGreaterThanOrEqual(0);
});

test("가장 긴 문자열을 반환한다", () => {
  const a = "longest";
  const b = "bbb";
  const c = "c";

  expect(getLongestString(a, b, c)).toBe("longest");
});
