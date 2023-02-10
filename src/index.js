const RacingController = require('./controller/RacingController.js');

class App {
  init() {
    const controller = new RacingController();
    controller.inputCarName();
  }
}

const app = new App();
app.init();

module.exports = App;
