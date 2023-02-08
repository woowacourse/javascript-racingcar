const StaticValue = Object.freeze({
  MOVE_CONDITION: 4,
});

const Readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ConsoleMessage = Object.freeze({
  CAR_NAME:
    "경주할 자동차 이름을 입력하세요(이름을 쉼표(,)를 기준으로 구분).\n",
  MOVE_COUNT: "시도할 횟수는 몇회인가요?\n",
});

const ErrorMessage = Object.freeze({
  NAME_INPUT: "자동차 이름은 쉼표(,)로 구분하여 1 ~ 5자 사이로 입력해주세요.",
  NAME_DUPLICATION: "자동차 이름을 중복되지 않게 입력해주세요.",
  MOVE_INPUT: "1 이상의 숫자를 입력해주세요.",
});

module.exports = { StaticValue, Readline, ConsoleMessage, ErrorMessage };
