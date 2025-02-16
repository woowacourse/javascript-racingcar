import { validateAttempt } from "../src/domain/validate.js";
import { ERROR_MESSAGE } from "../src/constants.js";

describe("시도 횟수 예외 테스트", () => {
  test("숫자가 아닌 경우", () => {
    ["a", ","].forEach((attempt) => {
      expect(() => {
        validateAttempt(Number(attempt));
      }).toThrow(ERROR_MESSAGE.INVALID_ATTEMPT_NUMBER);
    });
  });

  test("음수인 경우", () => {
    expect(() => {
      validateAttempt(-1);
    }).toThrow(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  });

  test("0인 경우", () => {
    expect(() => {
      validateAttempt(0);
    }).toThrow(ERROR_MESSAGE.ATTEMPT_TOO_LOW);
  });

  test("실수인 경우", () => {
    expect(() => {
      validateAttempt(5.5);
    }).toThrow(ERROR_MESSAGE.ATTEMPT_NUMBER_IS_NOT_INTEGER);
  });

  test("50을 초과할 경우", () => {
    expect(() => {
      validateAttempt(51);
    }).toThrow(ERROR_MESSAGE.ATTEMPT_TOO_HIGH);
  });
});

describe("시도 횟수 정상 테스트", () => {
  test("50을 초과하지 않는 양의 정수인 경우", () => {
    [1, 50].forEach((attempt) => {
      expect(() => {
        validateAttempt(attempt);
      }).not.toThrow();
    });
  });
});
