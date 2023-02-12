const Console = require('../utils/Console');

const InputView = {
  readInput(callback, precomment) {
    Console.readLine(precomment, (input) => {
        callback(input);
      }
    );
  },
};

module.exports = InputView;
