const { readline } = require('../utils/common');

const InputView = {
  async readline(text) {
    const input = await readline.question(text);
    return input;
  },
};

module.exports = InputView;
