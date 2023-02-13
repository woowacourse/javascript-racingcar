const readline = require('readline');
const { CONSOLE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readLine(query, callback) {
    if (arguments.length !== 2) {
      throw new Error(CONSOLE_ERROR_MESSAGE.NUMBER_OF_ARGUMENTS);
    }

    if (typeof query !== 'string') {
      throw new Error(CONSOLE_ERROR_MESSAGE.IS_NOT_STRING);
    }

    if (typeof callback !== 'function') {
      throw new Error(CONSOLE_ERROR_MESSAGE.TYPE_OF_CALLBACK);
    }

    if (callback.length !== 1) {
      throw new Error(CONSOLE_ERROR_MESSAGE.CALLBACK_ARGUMENTS);
    }

    rl.question(query, callback);
  },

  close() {
    rl.close();
  },

  print(message) {
    console.log(message);
  },
};

module.exports = Console;
