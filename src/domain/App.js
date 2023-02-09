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
      this.#carRace.setCarNames(await InputView.readCarNames(MESSAGES.carText));
      this.#repeat();
    } catch (e) {
      OutputView.printMessage(MESSAGES.carTextError);
      this.#start();
    }
  }

  async #repeat() {
    try {
      this.#carRace.setRepeatNumber(await InputView.readRepeatNumber(MESSAGES.repeatNumber));
      this.#playGame();
    } catch (e) {
      OutputView.printMessage(MESSAGES.repeatRangeError);
      this.#repeat();
    }
  }

  #playGame() {
    OutputView.printMessage(MESSAGES.resultTitle);
    for (let i = 0; i < this.#carRace.getRepeatNumber(); i += 1) {
      const temp = CarRaceGame.updateRace(this.#carRace.getCarDistances());
      this.#carRace.setCarDistances(temp);
      OutputView.printRoundResult(this.#carRace.getCarNames(), this.#carRace.getCarDistances());
    }
    const winners = CarRaceGame.judgeWinners(this.#carRace.getCarNames(), this.#carRace.getCarDistances());
    OutputView.printWinners(winners);
  }
}

const app = new App();
app.play();
module.exports = App;
