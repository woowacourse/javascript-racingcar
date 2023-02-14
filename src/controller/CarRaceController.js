const InputView = require("../view/InputView");
const OutputView = require("../view/OutputView");
const MESSAGES = require("../constant/Constant");
const CarRaceGame = require("../domain/CarRaceGame");
const CarRaceResultRandomGenerator = require("../domain/CarRaceResultRandomGenerator");

class CarRaceController {
  #carRace = new CarRaceGame();

  play() {
    this.start();
  }

  async start() {
    try {
      const cars = await InputView.readCarNames(MESSAGES.carText);
      this.#carRace.setCarNames(cars);
      this.#repeat();
    } catch (e) {
      OutputView.printMessage(e.message);
      this.start();
    }
  }

  async #repeat() {
    try {
      const repeatNumber = await InputView.readRepeatNumber(MESSAGES.repeatNumber);
      this.#playGame(repeatNumber);
    } catch (e) {
      OutputView.printMessage(e.message);
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

module.exports = CarRaceController;
