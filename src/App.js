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
      carNames.split(",").forEach((carName) => {
        this.#cars.push(new Car(carName));
      });

      this.readTryCount();
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readCarName();
    }
  }

  readTryCount() {
    InputView.readTryCount((tryCount) => this.readTryCountCallback(tryCount));
  }

  readTryCountCallback(tryCount) {
    try {
      Validator.tryCount(tryCount);
      console.log("성공");
    } catch (error) {
      OutputView.printErrorMessage(error);
      this.readTryCount();
    }
  }
}

const app = new App();
app.play();
