

class OutputView {
  printResult(result) {
    console.log(result);
  }

  printError(error) {
    console.log(error.message)
  }
}

module.exports = OutputView;
