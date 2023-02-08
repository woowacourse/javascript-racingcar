const InputView = require("./view/InputView.js");
const Validator = require("./model/Validator.js");
const Car = require("./model/Car.js");
const OutputView = require("./view/OutputView.js");

class App {
  #cars = [];
  play() {
    this.readCarName();
  }

  readCarName() {
    InputView.readCarName((carName) => this.readCarNameCallback(carName));
  }

  readCarNameCallback(carNames) {
    try {
      Validator.carName(carNames);
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readCarName();
    }

    carNames.split(",").forEach((carName) => {
      this.#cars.push(new Car(carName));
    });

    this.readTryCount();
  }

  readTryCount() {
    InputView.readTryCount((tryCount) => this.readTryCountCallback(tryCount));
  }

  readTryCountCallback(tryCount) {
    Validator.tryCount(tryCount);
  }
}

const app = new App();
app.play();
