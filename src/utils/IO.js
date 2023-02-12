const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const IO = {
  read(message, callback) {
    rl.question(message, callback);
  },

  print(message) {
    console.log(message);
  },

  close() {
    rl.close();
  },
};

module.exports = IO;
