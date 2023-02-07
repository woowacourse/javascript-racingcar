const { readCarNames } = require("./InputView");
const { validateCarNames } = require("./Validation");
class App {
  play() {
    readCarNames((names) => {
      validateCarNames(names);
    });
  }
}
