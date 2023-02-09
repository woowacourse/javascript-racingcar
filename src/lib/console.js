const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  static read(query, callback) {
    rl.question(query, callback);
  }

  static print(message) {
    console.log(message);
  }

  static close() {
    rl.close();
  }
}

module.exports = Console;
