const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  question (message) {
    this.validateType(message);

    return new Promise((resolve) => rl.question(message, (input) => resolve(input)))
  },

  print(message) {
    this.validateType(message);

    Console.print(message);
  },

  close() {
    rl.close();
  },

  validateType (message) {
    if (typeof message !== 'string') {
      throw new Error(`Argument is must be string type.`)
    }
  }
}

module.exports = Console;