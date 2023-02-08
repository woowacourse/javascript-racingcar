const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  read(query, callback) {
    rl.question(query, callback);
  },
  print(text) {
    console.log(text);
  },
  close() {
    rl.close();
  },
};

module.exports = Console;
