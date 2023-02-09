const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const MESSAGES = require("../constant/Constant");
const ErrorHandler = require("./ErrorHandler");
const CarRace = require("./CarRace");

class App {
  play() {
    this.#start();
  }

  async #start() {
    try {
      let cars = await InputView.readCarNames(MESSAGES.carText);
      console.log(cars);
      await this.#repeat();
    } catch (e) {
      OutputView.printMessage(MESSAGES.carTextError);
      this.#start();
    }
  }

  async #repeat() {
    try {
      let repeatNum = await InputView.readRepeatNumber(MESSAGES.repeatNumber);
      console.log("엥?");
    } catch (e) {
      OutputView.printMessage(MESSAGES.repeatRangeError);
      this.#repeat();
    }
  }
}

const app = new App();
app.play();
module.exports = App;
