import validateTryCount from "../src/validation/validateTryCount.js";
import { ERROR_TRY_COUNT_MESSAGE } from "../src/constants/constants.js";

describe("TryCount 유효성 테스트", () => {
  test.each([
    { description: "시도 횟수가 숫자가 아닌 경우", input: "Niya", errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER },
    {
      description: "시도 횟수가 정수가 아닌 경우",
      input: "1.1",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER,
    },
    {
      description: "시도 횟수가 0 이하인 경우",
      input: "-1",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE,
    },
  ])("%s 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateTryCount(input)).toThrow(errorMessage);
  });

  test("올바른 입력 값을 받는 경우 에러가 발생하지 않는다.", () => {
    // given
    const input = "1";

    // when & then
    expect(() => validateTryCount(input)).not.toThrow();
  });
});
