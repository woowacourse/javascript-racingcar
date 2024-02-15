const Controller = require('./controller/Controller.js');

class App {
  #controller;

  async start() {
    this.#controller = new Controller();
    await this.#controller.getCarNames();
    await this.#controller.getMoveCount();
    this.#controller.race();
    this.#controller.racingWinners();
  }
}

const app = new App();
app.start();
