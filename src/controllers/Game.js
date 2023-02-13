const Console = require('../utils/Console');
const Inputs = require('../view/Inputs');
const Outputs = require('../view/Outputs');
const RacingGame = require('../models/RacingGame');

class Game {
  #racingGame;
  #car = {
    count: 0,
    names: [],
  };

  async play() {
    await this.setGame();

    this.start();
    this.awards();
    this.exit();
  }

  async setGame() {
    this.#car.names = await Inputs.readCarName();
    this.#car.count = await Inputs.readTryCount();
  }

  start() {
    this.#racingGame = new RacingGame(this.#car.names);
    this.#racingGame.raceNTimes(this.#car.count);
    this.#racingGame.isAllFailed() && this.start();
  }

  restart() {
    this.start();
  }

  awards() {
    Outputs.printGameResultMessage();
    Outputs.printRacingSnapShot(this.#racingGame.snapShots);
    Outputs.printWinners(this.#racingGame.getWinners());
  }

  exit() {
    Console.close();
  }
}

module.exports = Game;
