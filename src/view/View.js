const readline = require("readline");
const { MESSAGE, RESULT_TYPE } = require("../constants");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const View = {
  input: (question, callback) => {
    rl.question(question, callback);
  },

  output: (data, type = "") => {
    if (!type) return console.log(data);

    if (type === RESULT_TYPE.MOVE_CNT) {
      Object.entries(data).forEach(([key, value]) => {
        console.log(MESSAGE.MOVE_CNT([key, value]));
      });
      return console.log();
    }

    if (type === RESULT_TYPE.WINNERS) {
      return console.log(MESSAGE.WINNERS(data));
    }
  },

  close: () => {
    rl.close();
  },
};

module.exports = { View };
