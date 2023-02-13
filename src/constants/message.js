const { CAR_RULE } = require('./rule');

const INPUT_MESSAGE = {
  CAR_NAMES: `경주할 자동차 이름을 입력하세요(이름은 쉼표(${CAR_RULE.NAME_SEPARATOR})를 기준으로 구분).\n`,
  MOVING_COUNT: '시도할 회수는 몇회인가요?\n',
};

const OUTPUT_MESSAGE = {
  RESULT_TITLE: '\n실행 결과',
  DISTANCE: '-',
};

const OUTPUT_MESSAGE_METHOD = {
  CAR_RESULT: (name, distance) => `${name} : ${OUTPUT_MESSAGE.DISTANCE.repeat(distance)}`,
  WINNER: (winners) => `${winners.join(', ')}(이)가 최종 우승했습니다.`,
};

const ERROR_MESSAGE = {
  PREFIX: '[ERROR]',
  FRONT_AND_BACK_SPACES: `앞 또는 뒤에 공백을 포함해 입력했습니다.`,
  OVER_CAR_NAME_LENGTH: `자동차 이름은 ${CAR_RULE.MIN_NAME_LENGTH}자 이상 ${CAR_RULE.MAX_NAME_LENGTH}자 이하만 가능합니다.`,
  INVALID_CHARACTER: '자동차 이름은 알파벳 또는 한글로 입력해야합니다.',
  INVALID_CAR_COUNT: '자동차 이름은 쉼표로 구분해 두 개 이상 입력해야합니다.',
  INVALID_MOVING_COUNT: '시도 횟수는 자연수를 입력해야합니다.',
  DUPLICATED_CAR_NAME: '중복되지 않게 자동차 이름을 입력해야합니다.',
};

module.exports = { INPUT_MESSAGE, OUTPUT_MESSAGE, OUTPUT_MESSAGE_METHOD, ERROR_MESSAGE };
