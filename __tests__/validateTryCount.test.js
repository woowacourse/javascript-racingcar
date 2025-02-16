import validateTryCount from "../src/validations/validateTryCount.js";
import {
  ERROR_TRY_COUNT_MESSAGE,
  MIN_TRY_COUNT,
  MAX_TRY_COUNT,
} from "../src/constants/constants.js";

describe("TryCount 유효성 테스트", () => {
  test.each([
    {
      description: "시도 횟수가 숫자가 아닌 경우",
      input: "Niya",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_NUMBER,
    },
    {
      description: "시도 횟수가 정수가 아닌 경우",
      input: "1.1",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVAILD_INTEGER,
    },
    {
      description: `시도 횟수가 ${MIN_TRY_COUNT} 미만인 경우`,
      input: `${MIN_TRY_COUNT - 1}`,
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE,
    },
    {
      description: `시도 횟수가 ${MAX_TRY_COUNT} 초과인 경우`,
      input: `${MAX_TRY_COUNT + 1}`,
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE,
    },
  ])("$description 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateTryCount(input)).toThrow(errorMessage);
  });

  test.each([
    {
      description: `시도 횟수가 숫자 및 정수이며, ${MIN_TRY_COUNT} 이상인 경우`,
      input: `${MIN_TRY_COUNT}`,
    },
    {
      description: `시도 횟수가 숫자 및 정수이며, ${MAX_TRY_COUNT} 이하인 경우`,
      input: `${MAX_TRY_COUNT}`,
    },
  ])("$description 정상적으로 통과한다.", ({ input }) => {
    // given
    // when & then
    expect(() => validateTryCount(input)).not.toThrow();
  });
});
