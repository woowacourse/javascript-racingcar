const COMMA = ",";
const LINE_BREAK = "\n";

const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAME: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).${LINE_BREAK}`,
  INPUT_TRY_COUNT: `시도할 횟수는 몇회인가요?${LINE_BREAK}`,
  RUN_RESULT_MESSAGE: `${LINE_BREAK}실행 결과`,
  MOVEMENT_UNIT: "-",
  COLON: ":",
  GAME_RESULT: "(이)가 최종 우승했습니다.",
});

const CAR_NAME_LENGTH = Object.freeze({
  MINIMUM_CAR_NAME_LENGTH: 1,
  MAXIMUM_CAR_NAME_LENGTH: 5,
});

const RANDOM_NUMBER_RANGE = Object.freeze({
  MIN: 0,
  MAX: 9,
});

const MINIMUM_TRY_COUNT = 1;
const MINIMUM_NUMBER_OF_CARS = 2;

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH_LIMIT: `자동차 이름은 ${CAR_NAME_LENGTH.MINIMUM_CAR_NAME_LENGTH}글자 이상, ${CAR_NAME_LENGTH.MAXIMUM_CAR_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  MINIMUM_CAR_COUNT: `자동차는 최소 ${MINIMUM_NUMBER_OF_CARS}대 이상 등록해주셔야 합니다.`,
  NOT_POSITIVE_NUMBER: "양수를 입력해 주세요.",
  INVALID_NAME: "유효한 이름을 입력해 주세요.",
  NOT_BLANK: "공백없이 입력해 주세요.",
  NAME_DUPLICATE: "중복된 이름은 사용할 수 없습니다.",
});

const REGEX = Object.freeze({
  BLANK: / /,
  ALPHABET_VALID_KOREAN_NUMBER: /[^a-zA-Z0-9가-힣]/,
  ONLY_NUMBER: /[^0-9]/,
});

const MOVEMENT = Object.freeze({
  FORWARD_DISTANCE: 1,
  FORWARD_CONDITION_NUMBER: 4,
});

module.exports = {
  COMMA,
  LINE_BREAK,
  GAME_MESSAGE,
  CAR_NAME_LENGTH,
  RANDOM_NUMBER_RANGE,
  MINIMUM_TRY_COUNT,
  MINIMUM_NUMBER_OF_CARS,
  ERROR_MESSAGE,
  REGEX,
  MOVEMENT,
};
