const Controller = require("./controller/Controller.js");
const InputView = require("./views/InputView");
class App {
  async play() {
    const controller = new Controller();

    controller.makeCars(await InputView.inputCarNames());
    controller.moveCars(await InputView.inputTryNumber());
    controller.whoIsWinners();
    controller.printWinners();
    controller.quit();
  }
}

const app = new App();
app.play();
module.exports = App;
