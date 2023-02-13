const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  static readLine(query, callback) {
    rl.question(query, callback);
  }

  static close() {
    rl.close();
  }

  static print(message) {
    console.log(message);
  }
}

module.exports = Console;
