import InputView from "./View/InputView.js";
import OutputView from "./View/OutputView.js";
import { ErrorHandler } from "./Validator/ErrorHandler.js";
import {
  inputCarNameValidator,
  tryCountValidator,
} from "./Validator/Validator.js";
import CarGame from "./Domain/CarGame.js";
import { utils } from "./Utils/Utils.js";

class App {
  #games;

  constructor(game = new CarGame()) {
    this.#games = game;
  }

  async play() {
    this.getCarNames();
  }

  async getCarNames() {
    const cars = await InputView.readCarName();
    const validateObject = {
      validator: () => inputCarNameValidator(cars),
      nextStep: () => this.getTryCount(cars),
      afterError: () => this.getCarNames(),
    };

    ErrorHandler(validateObject);
  }

  async getTryCount(cars) {
    const round = await InputView.readTryCount();

    const validateObject = {
      validator: () => tryCountValidator(round),
      nextStep: () => this.startPlay(cars, round),
      afterError: () => this.getTryCount(cars),
    };

    ErrorHandler(validateObject);
  }

  startPlay(cars, round) {
    this.#games.initializeGameStatus(cars, round);

    OutputView.printResultMessage();

    this.showEachGameRound();

    this.endPlay();
  }

  showEachGameRound() {
    const roundResult = this.#games.getEachGameRoundResult();

    for (const result of roundResult) {
      OutputView.printCarMovement(result);
    }
  }

  endPlay() {
    const gameStatus = this.#games.getStatusValuesArray();

    const maxPosition = this.#games.getMaxPosition(gameStatus);
    const winnerNames = this.#games.getWinnerNames(gameStatus, maxPosition);

    OutputView.printWinner(winnerNames);

    utils.close();
  }
}

export default App;
