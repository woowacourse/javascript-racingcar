const readline = require('readline');
const { ERROR_MESSAGES } = require('../constant/messages.js');

function readLineAsync(query) {
  return new Promise((resolve, reject) => {
    if (arguments.length !== 1) {
      reject(new Error(ERROR_MESSAGES.argumentsNotOne));
    }

    if (typeof query !== 'string') {
      reject(new Error(ERROR_MESSAGES.typeIsNotString));
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (input) => {
      rl.close();
      resolve(input);
    });
  });
}

module.exports = readLineAsync;
