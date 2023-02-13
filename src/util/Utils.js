const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

const utils = {
  print(message) {
    console.log(message);
  },

  readLine(query, callback) {
    rl.question(query, callback);
  },

  close() {
    rl.close();
  },
};

module.exports = utils;
