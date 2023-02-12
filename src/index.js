const Controller = require("./controller/Controller");

class App {
  #controller = new Controller();

  play() {
    this.#controller.playGame();
  }
}

module.exports = App;

const app = new App();
app.play();
