const { Controller } = require("./Controller");

class App {
  #controller;

  constructor() {
    this.#controller = new Controller();
  }

  play() {
    this.#controller.startGame();
  }
}

const app = new App();
app.play();
