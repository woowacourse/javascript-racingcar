const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }
  play() {
    this.controller.execute();
  }
}

const app = new App();
app.play();
