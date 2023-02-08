const Console = require('../utils/Console');

const InputView = {
  readCarNames(callback) {
    Console.readLine(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
      (input) => {
        callback(input);
      }
    );
  },
};

module.exports = InputView;
