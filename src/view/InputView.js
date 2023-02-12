const Console = require('../utils/Console');

const InputView = {
  readCarNames(callback) {
    Console.readLine(
      '경주할 1~5 글자로 이루어진 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      callback,
    );
  },

  readTryCount(callback) {
    Console.readLine('시도할 회수는 몇회인가요?\n', callback);
  },
};

module.exports = InputView;
