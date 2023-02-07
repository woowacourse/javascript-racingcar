const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('../data/constants.js');

const InputView = {
  readCarName(callback) {
    Console.readLine(MESSAGE.CAR_NAME_INPUT, callback);
  },
};

module.exports = InputView;
