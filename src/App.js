const InputView = require("./view/InputView.js");
const Validator = require("./model/Validator.js");
const Car = require("./model/Car.js");

class App {
  #cars = [];
  play() {
    this.readCarName();
  }

  readCarName() {
    InputView.readCarName((carName) => this.readCarNameCallback(carName));
  }

  readCarNameCallback(carNames) {
    Validator.carName(carNames);

    carNames.split(",").forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }
}

const app = new App();
app.play();
