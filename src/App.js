const Controller = require('./controller/Controller');

class App {
  constructor() {
    this.controller = new Controller();
  }
  playRacingCarGame() {
    this.controller.execute();
  }
}

const app = new App();
app.playRacingCarGame();
