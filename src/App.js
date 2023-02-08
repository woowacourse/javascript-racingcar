const InputView = require("./view/InputView.js");

class App {
  play() {
    this.readCarName();
  }

  readCarName() {
    InputView.readCarName((carName) => this.readCarNameCallback(carName));
  }

  readCarNameCallback(carName) {
    console.log(carName);
  }
}

const app = new App();
app.play();
