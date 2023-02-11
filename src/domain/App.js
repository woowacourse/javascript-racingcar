const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const MESSAGES = require("../constant/Constant");
const CarRaceGame = require("./CarRaceGame");
const CarRaceResultRandomGenerator = require("./CarRaceResultRandomGenerator");

class App {
  #carRace = new CarRaceGame();

  play() {
    this.#start();
  }

  async #start() {
    try {
      const carNames = await InputView.readCarNames(MESSAGES.carText);
      this.#carRace.setCarNames(carNames.split(","));
      this.#repeat();
    } catch (e) {
      OutputView.printMessage(MESSAGES.carTextError);
      this.#start();
    }
  }

  async #repeat() {
    try {
      const repeatNumber = await InputView.readRepeatNumber(MESSAGES.repeatNumber);
      this.#playGame(repeatNumber);
    } catch (e) {
      OutputView.printMessage(MESSAGES.repeatRangeError);
      this.#repeat();
    }
  }

  #playGame(repeatNumber) {
    OutputView.printMessage(MESSAGES.resultTitle);
    const carCount = this.#carRace.getCarNames().length;
    for (let i = 0; i < repeatNumber; i += 1) {
      const carDistances = this.#carRace.updateRace(
        CarRaceResultRandomGenerator.generate(carCount)
      );
      OutputView.printRaceResult(this.#carRace.getCarNames(), carDistances);
    }
    const winners = this.#carRace.judgeWinners();
    OutputView.printWinners(winners);
  }
}

module.exports = App;
