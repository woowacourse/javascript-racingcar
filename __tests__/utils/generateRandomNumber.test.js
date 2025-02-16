import generateRandomNumber from "../../src/utils/generateRandomNumber";

describe("utils/generateRandomNumber", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5); // 0.5를 고정 반환
  });

  afterEach(() => {
    jest.restoreAllMocks(); // mock을 원래 상태로 복구
  });

  test("랜덤 숫자는 0 이상 9 이하의 정수여야 한다", () => {
    const number = generateRandomNumber();
    expect(number).toBeGreaterThanOrEqual(0);
    expect(number).toBeLessThanOrEqual(9);
  });

  test("Math.random()이 0.5일 때, 올바른 값을 반환해야 한다", () => {
    const number = generateRandomNumber();
    expect(number).toBe(Math.floor(0.5 * 10)); // 5 예상
  });
});
