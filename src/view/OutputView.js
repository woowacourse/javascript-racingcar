const rl = require("./Readline");
class OutputView {
  printResult(result) {
    console.log(result);
  }

  printError(error) {
    console.log(error.message)
  }

  close() {
    rl.close();
  }
}

module.exports = OutputView;
