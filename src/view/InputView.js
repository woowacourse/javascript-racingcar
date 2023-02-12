const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const InputView = {
  readline(text) {
    return rl.question(text);
  },
};

module.exports = InputView;
