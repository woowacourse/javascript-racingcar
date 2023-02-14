const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readLine(inputMessage) {
    return new Promise(resolve => {
      rl.question(inputMessage, input => resolve(input));
    });
  },

  print(message) {
    console.log(message);
  },

  close() {
    rl.close();
  },
};

module.exports = Console;
