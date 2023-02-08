const Controller = require("./controller/controller.js");

class App {
  #controller = new Controller();

  constructor() {}

  play() {
    this.#controller.playGame();
  }
}

module.exports = App;
