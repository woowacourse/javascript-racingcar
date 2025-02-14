const GAME_MESSAGE = Object.freeze({
  ENTER_CAR_NAMES: `경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n`,
  ENTER_COUNT: `시도할 횟수는 몇 회인가요?\n`,
  RACING_RESULT: `\n실행 결과`,
  WINNER: `최종 우승자:`,
});

const ERROR_MESSAGE = Object.freeze({
  DUPLICATE_NAME: '중복된 이름이 존재합니다.',
  INVALID_NAME_LENGTH: '이름은 5자 이하여야 합니다.',
  INVALID_NAME_SPACE: '공백이 포함된 이름이 존재합니다.',
  INVALID_NAME_CHARACTER: '알파벳으로 구성되어야 합니다.',
  INVALID_CAR_COUNT: '자동차는 두 대 이상이어야 합니다.',
  INVALID_COUNT_SPACE: '횟수는 공백을 포함하면 안됩니다.',
  INVALID_COUNT_CHARACTER: '횟수는 문자를 입력하면 안됩니다.',
  INVALID_COUNT_MIN: '횟수는 최소 1 이상이어야 합니다.',
  INVALID_COUNT_MAX: '횟수는 최대 1000 이하이어야 합니다.',
});

const FORWARD_DASH = '-';

const SEPARATOR = ',';

export { GAME_MESSAGE, ERROR_MESSAGE, FORWARD_DASH, SEPARATOR };
