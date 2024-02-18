const CarService = require('../domain/CarService.js');
const InputView = require('../view/InputView.js');
const OutputView = require('../view/OutputView.js');

class Controller {
  #carService;

  async getCarNames() {
    const carNames = await InputView.readCarNames();

    this.#carService = new CarService(carNames);
  }

  async getMoveCount() {
    const moveCount = await InputView.readMoveCount();

    this.#carService.setMoveCount(moveCount);
  }

  race() {
    const racingResults = this.#carService.startRacing();

    OutputView.printGameResultMessage();
    racingResults.forEach((racingResult) => {
      OutputView.printGameResult(racingResult);
    });
  }

  racingWinners() {
    const winners = this.#carService.getRaceResult();

    OutputView.printWinners(winners);
  }
}

module.exports = Controller;
