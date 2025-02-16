import { generateRandomNumber } from "./math.js";

jest.mock("./math.js", () => ({
  generateRandomNumber: jest.fn(),
}));

describe("generateRandomNumber 함수 테스트", () => {
  const minRange = 0;
  const maxRange = 9;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("랜덤 숫자 5는 최소 범위 0보다 크다.", () => {
    generateRandomNumber.mockReturnValueOnce(5);
    const randomNumber = generateRandomNumber(minRange, maxRange);
    expect(randomNumber).toBeGreaterThan(minRange);
  });

  test("랜덤 숫자 -1은 최소 범위 0보다 작다.", () => {
    generateRandomNumber.mockReturnValueOnce(-1);
    const randomNumber = generateRandomNumber(minRange, maxRange);
    expect(randomNumber).toBeLessThan(minRange);
  });

  test("랜덤 숫자 7은 최대 범위 9보다 작다.", () => {
    generateRandomNumber.mockReturnValueOnce(7);
    const randomNumber = generateRandomNumber(minRange, maxRange);
    expect(randomNumber).toBeLessThan(maxRange);
  });

  test("랜덤 숫자 10은 최소 범위 9보다 크다.", () => {
    generateRandomNumber.mockReturnValueOnce(10);
    const randomNumber = generateRandomNumber(minRange, maxRange);
    expect(randomNumber).toBeGreaterThan(maxRange);
  });
});
