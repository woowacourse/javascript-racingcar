const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const Console = {
  readLine(query) {
    return rl.question(query);
  },

  close() {
    rl.close();
  },

  print(message) {
    console.log(message);
  },
};

module.exports = Console;
