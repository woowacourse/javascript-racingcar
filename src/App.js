const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    this.controller.init();
  }
}

const app = new App();
app.play();
