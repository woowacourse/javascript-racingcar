import TryCountValidator from "../src/validators/TryCountValidator.js";

describe("시도 횟수 유효성 클래스 테스트", () => {
  const tryCountValidator = new TryCountValidator();

  describe("시도 횟수 유효성 클래스 정상 케이스", () => {
    test.each([1, 100])("%p는 정상적인 시도 횟수이다.", (value) => {
      expect(() => tryCountValidator.validateNumber(value)).not.toThrow();
    });
  });

  describe("시도 횟수 유효성 클래스 예외 케이스", () => {
    test.each(["^", null, NaN, undefined, []])(
      "%p를 입력하면 에러가 발생한다.",
      (value) => {
        expect(() => tryCountValidator.validateNumber(value)).toThrow();
      },
    );

    test.each([-1, 0, -Infinity, Infinity, 101])(
      "%p를 입력하면 에러가 발생한다.",
      (value) => {
        expect(() => tryCountValidator.validateNumber(value)).toThrow();
      },
    );
  });
});
