const ERROR_MESSAGE = Object.freeze({
  CAR_NAME_INPUT_ERROR: Object.freeze({
    NOT_IN_RANGE:
      '[ERROR] 각 자동차의 이름은 1 ~ 5자 이내로 입력해주세요.',
  }),

  TRY_COUNT_INPUT_ERROR: Object.freeze({
    SHOULD_BE_POSITIVE:
      '[ERROR] 시도 횟수를 음수가 아닌 정수로 입력해주세요.',
  }),
});

const INPUT_MESSAGE = Object.freeze({
  CAR_NAME_INPUT:
    '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',

  TRY_COUNT_INPUT: '시도할 횟수는 몇 회인가요?\n',
});

const OUTPUT_MESSAGE = Object.freeze({
  RESULT_TITLE: '\n실행 결과',

  WINNER_IS: '최종 우승자:',
});

const NUMBERS = Object.freeze({
  CAR_NAME_MINIMUM_LENGTH: 1,
  CAR_NAME_MAXIMUM_LENGTH: 5,
  TRY_MINIMUM_COUNT: 0,
  DEFAULT_CAR_DISTANCE: 0,
  MOVEMENT_MINIMUM_THRESHOLD: 4,
  MOVE_INCREMENT: 1,
});

export { ERROR_MESSAGE, INPUT_MESSAGE, OUTPUT_MESSAGE, NUMBERS };
