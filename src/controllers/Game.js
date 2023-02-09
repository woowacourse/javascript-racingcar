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
    this.awards();
    this.exit();
  }

  async setGame() {
    this.#names = await Inputs.readCarName();
    this.#count = await Inputs.readTryCount();
  }

  start() {
    this.#RacingGame = new RacingGame(this.#names);
    this.#RacingGame.raceNTimes(this.#count);

    if (this.#RacingGame.allFailed()) this.restart();
  }

  restart() {
    this.start();
  }

  awards() {
    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(this.#RacingGame.getSnapShots());
    Outputs.printWinners(this.#RacingGame.getWinners());
  }

  exit() {
    Console.close();
  }
}

module.exports = Game;
