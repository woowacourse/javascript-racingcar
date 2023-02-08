const Console = require("../hook/Console");

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },
};

module.exports = OutputView;
