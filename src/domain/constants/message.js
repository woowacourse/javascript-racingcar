const { CAR_RULE } = require('./rule');

const INPUT_MESSAGE = {
  CAR_NAMES: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${CAR_RULE.separator})를 기준으로 구분).\n`,
  MOVING_COUNT: '시도할 회수는 몇회인가요?\n',
};

const OUTPUT_MESSAGE = {
  RESULT_TITLE: '\n실행 결과',
  DISTANCE: '-',
  WINNER: '가 최종 우승했습니다.',
};

const ERROR_MESSAGE = {
  OVER_CAR_NAME_LENGTH: `자동차 이름은 ${CAR_RULE.maxLength}자 이하만 가능합니다.`,
  EMPTY_CAR_NAME: '자동차 이름은 1자 이상 입력해야합니다.',
  INVALID_CHARACTER: '자동차 이름은 알파벳 또는 한글로 입력해야합니다.',
  INVALID_CAR_COUNT: '자동차 이름은 쉼표로 구분해 한 개이상 입력해야합니다.',
  INVALID_MOVING_COUNT: '이동 횟수는 자연수를 입력해야합니다.',
  DUPLICATED_CAR_NAME: '중복된 자동차 이름이 있습니다.',
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
