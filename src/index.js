const RacingController = require('./controller/RacingController.js');

class App {
  init() {
    const controller = new RacingController();
    controller.inputCarName();
  }
}

module.exports = App;
