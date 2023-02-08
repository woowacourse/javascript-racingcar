const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class IO {
  static read(message, callback) {
    rl.question(message, callback);
  }

  static print(message) {
    console.log(message);
  }

  static close() {
    rl.close();
  }
}

module.exports = IO;
