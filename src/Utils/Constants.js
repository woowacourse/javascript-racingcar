const GAME_MESSAGE = Object.freeze({
  INPUT_CAR_NAME:
    "경주할 자동치 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).",
  INPUT_TRY_COUNT: "시도할 횟수는 몇회인가요?",
  RUN_RESULT_MESSAGE: "실행 결과",
  MOVEMENT_UNIT: "-",
  COLON: ":",
  GAME_RESULT: "(이)가 최종 우승했습니다.",
});

const LINE_BREAK = "\n";
const MAXIMUM_CAR_NAME_LENGTH = 5;
const MINIMUM_TRY_COUNT = 1;
const MINIMUM_NUMBER_OF_CARS = 2;

const ERROR_MESSAGE = Object.freeze({
  NAME_LENGTH_LIMIT: "5글자 이하로 입력해 주세요.",
  MINIMUM_CAR_COUNT: "자동차는 최소 2대 이상 등록해주셔야 합니다.",
  NOT_POSITIVE_NUMBER: "양수를 입력해 주세요.",
  INVALID_NAME: "유효한 이름을 입력해 주세요.",
  NOT_BLANK: "공백없이 입력해 주세요.",
});

module.exports = {
  GAME_MESSAGE,
  LINE_BREAK,
  ERROR_MESSAGE,
  MAXIMUM_CAR_NAME_LENGTH,
  MINIMUM_TRY_COUNT,
  MINIMUM_NUMBER_OF_CARS,
};
