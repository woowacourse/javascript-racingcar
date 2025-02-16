import generateRandomNumber from "../../src/utils/generateRandomNumber";

describe("utils/generateRandomNumber", () => {
  test("랜덤 숫자는 0 이상 9 이하의 정수여야 한다", () => {
    const number = generateRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(9);
  });
});
