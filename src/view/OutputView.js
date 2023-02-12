const Console = require("./utils/Console");
class OutputView {
  printResult(result) {
    console.log(result);
  }

  printError(error) {
    console.log(error.message)
  }

  close() {
    Console.close();
  }
}

module.exports = OutputView;
