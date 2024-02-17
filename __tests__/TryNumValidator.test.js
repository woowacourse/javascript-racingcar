import { TRY_CONSTANTS } from "../src/Constants/Constants";
import TryNumValidator from "../src/Validator/TryNumValidator";

describe("TryNumValidator 객체 테스트", () => {
  test("시도 횟수는 숫자만 입력할 수 있다.", () => {
    const isNaNinput = "다섯번";
    expect(() => TryNumValidator.checkTryNum(isNaNinput)).toThrow();
  });

  describe("시도 횟수는 1이상 200이하만 입력 가능하다.", () => {
    test("예외) 시도 횟수가 음수일 때", () => {
      const underZeroInput = -1;
      expect(() => TryNumValidator.checkTryNum(underZeroInput)).toThrow();
    });

    test("엣지) 시도 횟수가  1일 때", () => {
      expect(() =>
        TryNumValidator.checkTryNum(TRY_CONSTANTS.TRY_RANGE.min)
      ).not.toThrow();
    });

    test("엣지) 시도 횟수가 200일 때", () => {
      expect(() =>
        TryNumValidator.checkTryNum(TRY_CONSTANTS.TRY_RANGE.max)
      ).not.toThrow();
    });

    test("예외) 시도 횟수가 200보다 클 때", () => {
      const overMaxRange = 201;
      expect(() => TryNumValidator.checkTryNum(overMaxRange)).toThrow();
    });
  });
});
