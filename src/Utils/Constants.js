const COMMA = ",";
const LINE_BREAK = "\n";

const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAME: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).${LINE_BREAK}`,
  INPUT_TRY_COUNT: `시도할 횟수는 몇 회인가요?${LINE_BREAK}`,
  RUN_RESULT_MESSAGE: `${LINE_BREAK}실행 결과`,
  MOVEMENT_UNIT: "-",
  COLON: ":",
  GAME_RESULT: "(이)가 최종 우승했습니다.",
});

const MAXIMUM_CAR_NAME_LENGTH = 5;
const MINIMUM_CAR_NAME_LENGTH = 1;
const MINIMUM_TRY_COUNT = 1;
const MAXIMIM_TRY_COUNT = 100;
const MINIMUM_NUMBER_OF_CARS = 2;
const MOVEMENT_STANDARD_NUMBER = 4;
const FORWARD_VALUE = 1;

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH_LIMIT: `${MINIMUM_CAR_NAME_LENGTH}글자 이상 ${MAXIMUM_CAR_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  MINIMUM_CAR_COUNT: `자동차는 최소 ${MINIMUM_NUMBER_OF_CARS}대 이상 등록해주셔야 합니다.`,
  NOT_POSITIVE_NUMBER: "양수를 입력해 주세요.",
  INVALID_NAME: "유효한 이름을 입력해 주세요.",
  NOT_BLANK: "공백없이 입력해 주세요.",
  NAME_DUPLICATE: "중복된 이름은 사용할 수 없습니다.",
  NOT_INTEGER: "정수를 입력해주세요.",
  TRY_COUNT_ARRANGE: `${MINIMUM_TRY_COUNT}부터 ${MAXIMIM_TRY_COUNT}까지 입력이 가능합니다.`,
});

export {
  GAME_MESSAGE,
  LINE_BREAK,
  ERROR_MESSAGE,
  MAXIMUM_CAR_NAME_LENGTH,
  MINIMUM_TRY_COUNT,
  MINIMUM_NUMBER_OF_CARS,
  COMMA,
  MOVEMENT_STANDARD_NUMBER,
  MINIMUM_CAR_NAME_LENGTH,
  FORWARD_VALUE,
  NOT_INTEGER,
  MAXIMIM_TRY_COUNT,
};
