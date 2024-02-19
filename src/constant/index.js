export const MESSAGES = Object.freeze({
  INPUT_CAR_NAMES:
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분). ",
  INPUT_TRY_NUMBER: "시도할 회수는 몇회인가요? ",
  RESULT: "실행 결과",
  WINNER: "최종 우승자 : ",
});

export const ERROR = Object.freeze({
  CAR_DUPLICATE: "중복된 이름의 자동차가 있습니다. 다시 입력해주세요.",
  NAME_RANGE: "자동차 이름은 1자 이상, 5자 이하만 가능합니다.",
  NOT_NATURAL_NUMBER: "시도 횟수에는 자연수를 입력해주세요.",
});

export const CAR_NAME_REQUIREMENTS = Object.freeze({
  NAME_LENGTH_MIN: 1,
  NAME_LENGTH_MAX: 5,
});

export const MOVE_CONDITION = 4;
