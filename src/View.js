const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const View = {
  input: (question, callback) => {
    rl.question(question, callback);
  },

  output: (inputValue) => {
    console.log(inputValue);
  },

  close: () => {
    rl.close();
  },
};

module.exports = { View };
