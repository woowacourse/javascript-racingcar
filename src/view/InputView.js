const { Console } = require('@woowacourse/mission-utils');

const REQUEST_MSG = {
  carNames: '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
};

const InputView = {
  readCarNames(callback) {
    Console.readLine(REQUEST_MSG.carNames, callback);
  },
};

module.exports = InputView;
