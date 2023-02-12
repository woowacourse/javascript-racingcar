const RacingGame = require('../model/RacingGame');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #racingGame;

  playGame() {
    this.inputCarNames();
  }

  inputCarNames() {
    InputView.readCarNames((cars) => {
      this.#racingGame = new RacingGame(cars);
      this.inputMoveCount();
    });
  }

  inputMoveCount() {
    InputView.readMoveCount((moveCount) => {
      Array.from({ length: moveCount }, () => {
        this.handleCarsMovement();
        OutputView.printEmptyLine();
      });

      this.handleWinners();
    });
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
