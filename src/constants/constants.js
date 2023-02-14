const readline = require('readline');

const StaticValue = Object.freeze({
  MOVE_CONDITION: 4,
  RANDOM_NUMBER_LIMIT: 10,
  REGEX_WHITESPACE: /\s|^$/,
  REGEX_NON_DIGIT: /\D/,
  REGEX_DIGIT_START: /^\d/,
  CAR_NAME_LIMIT: 5,
  CAR_NAME_INPUT_SEPARATOR: ',',
  CAR_MOVEMENT_SYMBOL: '-',
  WINNER_RESULT_SEPARATOR: ', ',
});

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ConsoleMessage = Object.freeze({
  CAR_NAME: '경주할 자동차 이름을 입력하세요(이름을 쉼표(,)를 기준으로 구분).\n',
  MOVE_COUNT: '시도할 횟수는 몇회인가요?\n',
  moveDistance(name, distance) {
    return `${name} : ${distance}`;
  },
  result(winner) {
    return `${winner}(이)가 최종 우승했습니다.`;
  },
});

const ErrorMessage = Object.freeze({
  NAME_INPUT: `자동차 이름은 쉼표(${StaticValue.CAR_NAME_INPUT_SEPARATOR})로 구분하여 1 ~ ${StaticValue.CAR_NAME_LIMIT}자 사이로 입력해주세요.`,
  NAME_FORMAT: '자동차 이름은 한글 또는 알파벳 문자로 시작해주세요.',
  NAME_DUPLICATION: '자동차 이름을 중복되지 않게 입력해주세요.',
  MOVE_INPUT: '1 이상의 숫자를 입력해주세요.',
});

module.exports = {
  StaticValue,
  RL,
  ConsoleMessage,
  ErrorMessage,
};
