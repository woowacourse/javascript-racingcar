const { MESSAGES } = require("../constant/Constant");
const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const CarRaceGame = require("./CarRaceGame");

class App {
  #carRaceGame = new CarRaceGame();

  play() {
    this.#readCarText();
  }

  async #readCarText() {
    try {
      const carNames = await InputView.readCarNames(MESSAGES.carText);
      this.#carRaceGame.createRaceUsingCarNames(carNames);
      this.#readRepeatNumber();
    } catch (error) {
      OutputView.printMessage(error.message);
      this.#readCarText();
    }
  }

  async #readRepeatNumber() {
    try {
      const repeatNumber = await InputView.readRepeatNumber(MESSAGES.repeatNumber);
      this.#playRoundMultipleTimes(repeatNumber);
    } catch (error) {
      OutputView.printMessage(error.message);
      this.#readRepeatNumber();
    }
  }

  #playRoundMultipleTimes(repeatNumber) {
    OutputView.printMessage(MESSAGES.resultTitle);

    for (let index = 0; index < repeatNumber; index += 1) {
      this.#carRaceGame.performRaceOnce();
      const carRaceRoundResult = this.#carRaceGame.getRaceResult();
      OutputView.printRoundResult(carRaceRoundResult.carNames, carRaceRoundResult.carDistances);
    }

    this.#announceWinners();
  }

  #announceWinners() {
    const winners = this.#carRaceGame.getWinners();
    OutputView.printWinners(winners);
  }
}

const game = new App();
game.play();

module.exports = App;
