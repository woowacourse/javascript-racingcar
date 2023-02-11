const readline = require('readline');
const { CONSOLE_ERROR_MESSAGE } = require('../Constant/ErrorMessage');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  static readLine(query, callback) {
    if (arguments.length !== 2) {
      throw new Error(CONSOLE_ERROR_MESSAGE.numberOfArguments);
    }

    if (typeof query !== 'string') {
      throw new Error(CONSOLE_ERROR_MESSAGE.isNotString);
    }

    if (typeof callback !== 'function') {
      throw new Error(CONSOLE_ERROR_MESSAGE.typeOfCallback);
    }

    if (callback.length !== 1) {
      throw new Error(CONSOLE_ERROR_MESSAGE.callbackArguments);
    }

    rl.question(query, callback);
  }

  static close() {
    rl.close();
  }

  static print(message) {
    console.log(message);
  }
}

module.exports = Console;
