const Console = require('../utils/Console');
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
    if (!(this.#names && this.#count)) return;

    this.#RacingGame = new RacingGame(this.#names);
    this.#RacingGame.raceNTimes(this.#count);

    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(this.#RacingGame.getSnapShots());
    Outputs.printWinners(this.#RacingGame.getWinners());

    this.exit();
  }

  exit() {
    Console.close();
  }
}

module.exports = Game;
