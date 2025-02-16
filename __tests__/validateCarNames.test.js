import validateCarNames from "../src/validations/validateCarNames.js";
import {
  ERROR_CAR_NAMES_MESSAGE,
  MAX_CAR_NAME_LENGTH,
  MINIMUM_CAR_COUNT,
} from "../src/constants/constants.js";

describe("CarNames 유효성 테스트", () => {
  test.each([
    {
      description: `자동차 이름이 ${MAX_CAR_NAME_LENGTH}글자가 넘는 경우`,
      input: "Niya,HoyyChoi",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.OVER,
    },
    {
      description: "자동차 이름이 중복되는 경우",
      input: "Niya,Niya",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.DUPLICATE,
    },
    {
      description: "자동차 이름이 존재하지 않는 경우",
      input: "Niya,",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS,
    },
    {
      description: `자동차가 ${MINIMUM_CAR_COUNT}대 미만인 경우`,
      input: "Niya",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS,
    },
    {
      description: `자동차 ${MINIMUM_CAR_COUNT}대 미만이면서 구분자(,)가 잘못 입력된 경우`,
      input: "Niya,",
      errorMessage: ERROR_CAR_NAMES_MESSAGE.NOT_ENOUGH_PLAYERS,
    },
  ])("$description 에러가 발생한다.", ({ input, errorMessage }) => {
    // given
    // when & then
    expect(() => validateCarNames(input)).toThrow(errorMessage);
  });

  test.each([
    {
      description: `자동차 이름이 ${MINIMUM_CAR_COUNT}개 이상이고, 각 이름이 ${MAX_CAR_NAME_LENGTH}글자 이하이며, 중복되지 않는 경우`,
      input: "Niya,Hoyy,Choi",
    },
    {
      description: `자동차 이름이 ${MINIMUM_CAR_COUNT}개 이상이며, 1글자짜리 이름도 포함되었을 경우`,
      input: "A,B,C",
    },
    {
      description: `자동차 ${MINIMUM_CAR_COUNT}대이면서 구분자(,)가 잘못 입력된 경우, 구분자를 무시하고`,
      input: "Niya,Hoyy,,",
    },
  ])("$description 정상적으로 통과한다.", ({ input }) => {
    // given
    // when & then
    expect(() => validateCarNames(input)).not.toThrow();
  });
});
