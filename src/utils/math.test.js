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

  test("랜덤 숫자의 최소 범위는 0이다.", () => {
    randomNumberGenerator.mockReturnValueOnce(minRange);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeGreaterThanOrEqual(minRange);
  });

  test("랜덤 숫자가 최소 범위 0보다 작다.", () => {
    randomNumberGenerator.mockReturnValueOnce(-1);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeLessThan(minRange);
  });

  test("랜덤 숫자의 최대 범위는 9이다.", () => {
    randomNumberGenerator.mockReturnValueOnce(maxRange);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeLessThanOrEqual(maxRange);
  });

  test("랜덤 숫자가 최소 범위 9보다 크다.", () => {
    randomNumberGenerator.mockReturnValueOnce(10);
    const randomNumber = randomNumberGenerator(minRange, maxRange);
    expect(randomNumber).toBeGreaterThan(maxRange);
  });
});
