const readlinePromises = require("node:readline/promises");
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const utils = {
  print(message) {
    console.log(message);
  },

  readLine(query, callback) {
    return rl.question(query, callback);
  },

  close() {
    rl.close();
  },
};

module.exports = utils;
