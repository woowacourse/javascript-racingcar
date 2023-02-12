const readline = require("readline");

const StaticValue = Object.freeze({
  MOVE_CONDITION: 4,
  REGEX_WHITESPACE: /\s|^$/,
  CAR_NAME_LIMIT: 5,
  CAR_NAME_INPUT_SEPERATOR: ",",
  RANDOM_NUMBER_MIN: 0,
  RANDOM_NUMBER_MAX: 9,
});

const RL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ConsoleMessage = Object.freeze({
  CAR_NAME:
    "경주할 자동차 이름을 입력하세요(이름을 쉼표(,)를 기준으로 구분).\n",
  MOVE_COUNT: "시도할 횟수는 몇회인가요?\n",
  CAR_MOVE_LOG_LETTER: "-",
  moveDistance(name, distance) {
    return `${name} : ${distance}`;
  },
  result(winner) {
    return `${winner}(이)가 최종 우승했습니다.`;
  },
});

const ErrorMessage = Object.freeze({
  NAME_INPUT: "자동차 이름은 쉼표(,)로 구분하여 1 ~ 5자 사이로 입력해주세요.",
  NAME_DUPLICATION: "자동차 이름을 중복되지 않게 입력해주세요.",
  MOVE_INPUT: "1 이상의 숫자를 입력해주세요.",
});

module.exports = {
  StaticValue,
  RL,
  ConsoleMessage,
  ErrorMessage,
};
