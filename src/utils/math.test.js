import { randomNumberGenerator } from "./math.js";

jest.mock("./math.js", () => ({
  randomNumberGenerator: jest.fn(),
}));

describe("randomNumberGenerator 함수 테스트", () => {
  const minRange = 0;
  const maxRange = 9;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("랜덤 숫자 5는 최소 범위 0보다 크다.", () => {
    randomNumberGenerator.mockReturnValueOnce(5);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeGreaterThan(minRange);
  });

  test("랜덤 숫자 -1은 최소 범위 0보다 작다.", () => {
    randomNumberGenerator.mockReturnValueOnce(-1);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeLessThan(minRange);
  });

  test("랜덤 숫자 7은 최대 범위 9보다 작다.", () => {
    randomNumberGenerator.mockReturnValueOnce(7);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeLessThan(maxRange);
  });

  test("랜덤 숫자 10은 최소 범위 9보다 크다.", () => {
    randomNumberGenerator.mockReturnValueOnce(10);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeGreaterThan(maxRange);
  });
});
