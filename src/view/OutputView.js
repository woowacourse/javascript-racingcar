const Console = require("../hook/Console");

const OutputView = {
  printErrorMessage(error) {
    Console.print(error);
  },

  printProcessResult(result) {
    Console.print(result);
  },
};

module.exports = OutputView;
