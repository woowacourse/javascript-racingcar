const readlinePromises = require('node:readline/promises');

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  read(query) {
    return rl.question(query);
  },

  close() {
    rl.close();
  },
};

module.exports = Console;
