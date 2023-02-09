const Controller = require('./Controller/Controller');

class App {
  play() {
    const controller = new Controller();
    controller.init();
  }
}

const app = new App();
app.play();

module.exports = App;
