const { StaticValue, ConsoleMessage } = require('../constants/constants');
const RacingGame = require('../domain/RacingGame');
const Exception = require('../utils/Exception');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #racingGame;

  playGame() {
    this.inputCarNames();
  }

  inputCarNames() {
    InputView.readInput(ConsoleMessage.CAR_NAME, (input) => {
      try {
        const CARS = input.split(StaticValue.CAR_NAME_INPUT_SEPARATOR);
        Exception.checkCarInput(CARS);
        this.#racingGame = new RacingGame(CARS);
        this.inputMoveCount();
      } catch (error) {
        console.log(error.message);
        this.inputCarNames();
      }
    });
  }

  inputMoveCount() {
    InputView.readInput(ConsoleMessage.MOVE_COUNT, (input) => {
      try {
        Exception.checkMoveCountInput(input);
        this.handleRacingGame(input);
      } catch (error) {
        console.log(error.message);
        this.inputMoveCount();
      }
    });
  }

  handleRacingGame(moveCount) {
    Array.from({ length: moveCount }, () => {
      this.handleCarsMovement();
      OutputView.printEmptyLine();
    });

    this.handleWinners();
  }

  handleCarsMovement() {
    const CAR_MOVEMENT = this.#racingGame.getCarsMovement();

    CAR_MOVEMENT.forEach(([name, distance]) => {
      OutputView.printMoveDistance(name, distance);
    });
  }

  handleWinners() {
    OutputView.printWinner(this.#racingGame.getWinners());
  }
}

module.exports = Controller;
