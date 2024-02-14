import CarService from '../service/CarService.js';
import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';

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

export default Controller;
