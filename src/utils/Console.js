const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const Console = {
  readline(inputMessage) {
    return new Promise((resolve, reject) => {
      rl.question(inputMessage, (answer) => resolve(answer));
    });
  },

  print(outputMessage) {
    console.log(outputMessage);
  },

  close() {
    rl.close();
  },
};

module.exports = Console;
