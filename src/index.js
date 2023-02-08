const Cars = require("./Cars");
const { readCarNames, readTryCount, close } = require("./InputView");
const Validation = require("./Validation");
class App {
  #cars;
  #tryCount;

  play() {
    this.requestInputCarNames();
  }

  requestInputCarNames() {
    readCarNames((names) => {
      Validation.validateCarNames(names);
      this.#cars = new Cars(names);
      this.requestInputTryCount();
    });
  }

  requestInputTryCount() {
    readTryCount((tryCount) => {
      Validation.validateTryCount(tryCount);
      this.#tryCount = tryCount;
    });
  }
}

const app = new App();
app.play();
