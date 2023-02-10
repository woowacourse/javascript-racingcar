const Console = require('../utils/Console');

const REQUEST_MSG = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
  raceRound: '시도할 회수는 몇회인가요?\n',
};

const InputView = {
  readCarNames(callback) {
    Console.question(REQUEST_MSG.carNames, callback);
  },

  readRaceRound(callback) {
    Console.question(REQUEST_MSG.raceRound, callback);
  },
};

module.exports = InputView;
