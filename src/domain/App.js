const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const MESSAGES = require("../constant/Constant");
const CarRace = require("./CarRace");
const CarRaceGame = require("./CarRaceGame");

class App {
  #carRace = new CarRace();

  play() {
    this.#start();
  }

  async #start() {
    try {
      const carNames = await InputView.readCarNames(MESSAGES.carText)
      this.#carRace.setCarNames(carNames);
      this.#repeat();
    } catch (e) {
      OutputView.printMessage(MESSAGES.carTextError);
      this.#start();
    }
  }

  async #repeat() {
    try {
      const repeatNumber = await InputView.readRepeatNumber(MESSAGES.repeatNumber)
      this.#carRace.setRepeatNumber(repeatNumber);
      this.#playGame();
    } catch (e) {
      OutputView.printMessage(MESSAGES.repeatRangeError);
      this.#repeat();
    }
  }

  #playGame() {
    OutputView.printMessage(MESSAGES.resultTitle);
    for (let i = 0; i < this.#carRace.getRepeatNumber(); i += 1) {
      const carDistances = CarRaceGame.updateRace(this.#carRace.getCarDistances());
      this.#carRace.setCarDistances(carDistances);
      OutputView.printRoundResult(this.#carRace.getCarNames(), this.#carRace.getCarDistances());
    }
    const winners = CarRaceGame.judgeWinners(this.#carRace.getCarNames(), this.#carRace.getCarDistances());
    OutputView.printWinners(winners);
  }
}

module.exports = App;
