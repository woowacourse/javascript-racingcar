const IO = require('../utils/IO.js');
const { MESSAGE } = require('../data/constants.js');

const InputView = {
  readCarName(callback) {
    IO.read(MESSAGE.CAR_NAME_INPUT, callback);
  },
};

module.exports = InputView;
