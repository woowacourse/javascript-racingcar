import randomNumber from "../src/util/random.js";

test("랜덤으로 생성된 숫자는 0에서 9 사이의 숫자이다.", () => {
  const randomNum = randomNumber();

  expect(randomNum).toBeGreaterThanOrEqual(0);
  expect(randomNum).toBeLessThanOrEqual(9);
});
