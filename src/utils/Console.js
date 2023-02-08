const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  close() {
    rl.close();
  },

  readline(query, callback) {
    rl.question(query, callback);
  },

  print(message) {
    console.log(message);
  },
};

module.exports = Console;
