const Inputs = require('../views/Inputs');
const Outputs = require('../views/Outputs');
const RacingGame = require('../models/RacingGame');

class Game {
  #RacingGame;
  #count;
  #names = [];

  async play() {
    await this.setGame();

    this.start();
  }

  async setGame() {
    this.#names = await Inputs.readCarName();
    this.#count = await Inputs.readTryCount();
  }

  start() {
    this.#RacingGame = new RacingGame(this.#names);

    Outputs.printGameResultMessage();
    Array(this.#count)
      .fill()
      .forEach(() => {
        this.#RacingGame.race();
        Outputs.printRacingSnapShot(this.#RacingGame.getCars());
      });

    Outputs.printWinners(this.#RacingGame.getWinners());
  }
}

module.exports = Game;
