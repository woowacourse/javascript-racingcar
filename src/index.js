const Game = require('./controllers/Game');

class App {
  #game;

  constructor() {
    this.#game = new Game();
  }

  async play() {
    await this.#game.play();
  }
}

const app = new App();
app.play();

module.exports = App;
