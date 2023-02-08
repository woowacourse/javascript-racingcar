const readlinePromises = require('node:readline/promises');
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const InputView = {
  async readline(text) {
    const input = await rl.question(text);
    return input;
  },
};

module.exports = InputView;
