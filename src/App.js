const Controller = require('./controller/Controller');

class App {
  #controller;

  async playRacingCarGame() {
    this.#controller = new Controller();
    await this.#controller.createRacingCarGame();
    
    this.#controller.executeRacingCarGame();
  }
}

const app = new App();
app.playRacingCarGame();
