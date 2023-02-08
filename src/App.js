const InputView = require("./view/InputView.js");
const Validator = require("./model/Validator.js");

class App {
  play() {
    this.readCarName();
  }

  readCarName() {
    InputView.readCarName((carName) => this.readCarNameCallback(carName));
  }

  readCarNameCallback(carName) {
    Validator.carName(carName);
  }
}

const app = new App();
app.play();
