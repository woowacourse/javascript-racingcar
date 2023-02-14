const Controller = require("./controller/Controller");

class App {
  #controller;

  play() {
    this.#controller = new Controller();
    this.#controller.startGame();
  }
}

module.exports = App;

const app = new App();
app.play();
