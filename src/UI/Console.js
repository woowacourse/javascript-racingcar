const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readLine(query, callback) {
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
