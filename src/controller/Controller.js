const CarRace = require('../domain/CarRace.js');
const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');

class Controller {
  #carRace;

  async getCarNames() {
    const carNames = await InputView.readCarNames();

    this.#carRace = new CarRace(carNames);
  }

  async getMoveCount() {
    const moveCount = await InputView.readMoveCount();

    this.#carRace.setMoveCount(moveCount);
  }

  race() {
    const racingResults = this.#carRace.startRacing();

    OutputView.printGameResultMessage();
    racingResults.forEach((racingResult) => {
      OutputView.printGameResult(racingResult);
    });
  }

  racingWinners() {
    const winners = this.#carRace.getRaceResult();

    OutputView.printWinners(winners);
  }
}

module.exports = Controller;
