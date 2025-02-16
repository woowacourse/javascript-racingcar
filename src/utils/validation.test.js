import { INVALID_MESSAGE } from "../constants/index.js";
import CustomError from "../CustomError.js";
import { validateCarNames, validateAttemptCount } from "./validation.js";

describe("validateCarNames 함수 테스트", () => {
  test("overMaxLimitCarNames는 최대 범위 10대보다 많아 에러가 발생한다.", () => {
    const overMaxLimitCarNames = Array.from({ length: 11 }, (_, i) =>
      String(i + 1)
    );

    expect(() => validateCarNames(overMaxLimitCarNames)).toThrow(
      new CustomError(INVALID_MESSAGE.CAR_COUNT)
    );
  });

  test("['5글자보다긴이름', '1'] '5글자보다긴이름'은 최대 이름 길이 5를 넘어 에러가 발생한다.", () => {
    const invalidCarNames = ["5글자보다긴이름", "1"];

    expect(() => validateCarNames(invalidCarNames)).toThrow(
      new CustomError(INVALID_MESSAGE.CAR_NAME_LENGTH)
    );
  });

  test("['pobi', 'pobi'] 중복된 이름이 있어 에러가 발생한다.", () => {
    const duplicateCarNames = ["pobi", "pobi"];

    expect(() => validateCarNames(duplicateCarNames)).toThrow(
      new CustomError(INVALID_MESSAGE.DUPLICATE_CAR_NAME)
    );
  });
});

describe("validateAttemptCount 함수 테스트", () => {
  test("시도 횟수 1.1은 정수가 아니어서 에러가 발생한다.", () => {
    const invalidAttemptCount = "1.1";

    expect(() => validateAttemptCount(invalidAttemptCount)).toThrow(
      new CustomError(INVALID_MESSAGE.INTEGER_FORMAT)
    );
  });

  test("시도 횟수 0은 최소 범위 1보다 작아 에러가 발생한다.", () => {
    const underMinLimitAttemptCount = 0;

    expect(() => validateAttemptCount(underMinLimitAttemptCount)).toThrow(
      new CustomError(INVALID_MESSAGE.ATTEMPT_COUNT)
    );
  });

  test("시도 횟수 101은 최대 범위 100보다 커 에러가 발생한다.", () => {
    const overMaxLimitAttemptCount = 101;

    expect(() => validateAttemptCount(overMaxLimitAttemptCount)).toThrow(
      new CustomError(INVALID_MESSAGE.ATTEMPT_COUNT)
    );
  });
});
