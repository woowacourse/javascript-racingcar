const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Console {
  static readLine(question, callback) {
    rl.question(question, callback);
  }

  static print(data) {
    console.log(data);
  }

  static quit() {
    rl.close();
  }
}

module.exports = Console;
