const readlinePromises = require('node:readline/promises');

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  close() {
    rl.close();
  },

  readline(query) {
    return rl.question(query);
  },

  print(message) {
    console.log(message);
  },
};

module.exports = Console;
