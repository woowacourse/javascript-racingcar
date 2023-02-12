const Console = require('../utils/Console');
const Inputs = require('../view/Inputs');
const Outputs = require('../view/Outputs');
const RacingGame = require('../domain/models/RacingGame');

class Game {
  #racingGame;
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
    this.#racingGame = new RacingGame(this.#names);
    this.#racingGame.raceNTimes(this.#count);

    if (this.#racingGame.allFailed()) this.restart();
  }

  restart() {
    this.start();
  }

  awards() {
    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(this.#racingGame.getSnapShots());
    Outputs.printWinners(this.#racingGame.getWinners());
  }

  exit() {
    Console.close();
  }
}

module.exports = Game;
