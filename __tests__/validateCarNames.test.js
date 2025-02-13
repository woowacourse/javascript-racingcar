import validateCarNames from "../src/validation/validateCarNames.js";
import { ERROR_CAR_NAMES_MESSAGE } from "../src/constants/constants.js";

describe("CarNames 유효성 테스트", () => {
  test.each([
    { description: "자동차 이름이 존재하지 않는 경우", input: "", errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_EXIST },
    {
      description: "자동차 이름이 5글자가 넘는 경우",
      input: "Niya,HoyyChoi",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.OVER,
    },
    {
      description: "자동차 이름이 중복되는 경우",
      input: "Niya,Niya",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.DUPLICATE,
    },
  ])("%s 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateCarNames(input)).toThrow(errorMessage);
  });

  test("올바른 입력 값을 받는 경우 에러가 발생하지 않는다.", () => {
    // given
    const input = "Niya,Hoyy,Choi";

    // when & then
    expect(() => validateCarNames(input)).not.toThrow();
  });
});
