import validateTryCount from "../src/validations/validateTryCount.js";
import { ERROR_TRY_COUNT_MESSAGE } from "../src/constants/constants.js";

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
      description: "시도 횟수가 0 이하인 경우",
      input: "0",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE,
    },
    {
      description: "시도 횟수가 50 초과인 경우",
      input: "51",
      errorMessage: ERROR_TRY_COUNT_MESSAGE.INVALID_RANGE,
    },
  ])("$description 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateTryCount(input)).toThrow(errorMessage);
  });

  test.each([
    {
      description: "시도 횟수가 숫자 및 정수이며, 0 초과인 경우",
      input: "1",
    },
    {
      description: "시도 횟수가 숫자 및 정수이며, 50 이하인 경우",
      input: "50",
    },
  ])("$description 정상적으로 통과한다.", ({ input }) => {
    // given
    // when & then
    expect(() => validateTryCount(input)).not.toThrow();
  });
});
