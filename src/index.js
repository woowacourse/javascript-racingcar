import Race from './Race';
import InputView from './views/InputView';
import OutputView from './views/OutputView';
import Validator from './Validator';

class App {
  async play() {
    const carNameList = await this.#readCarNameList();
    const turnCount = await this.#readTurnCount();

    const race = new Race(carNameList);
    race.runRace(turnCount);

    OutputView.printWinners(race.winner);
  }

  async #readCarNameList() {
    try {
      const carNameList = await InputView.readCarNameList();
      Validator.validateCarNameList(carNameList);
      return carNameList;
    } catch (error) {
      OutputView.print(error.message);
      return this.#readCarNameList();
    }
  }

  async #readTurnCount() {
    try {
      const turnCountInput = await InputView.readTurnCount();
      Validator.validateTurnCount(turnCountInput);
      return parseInt(turnCountInput, 10);
    } catch (error) {
      OutputView.print(error.message);
      return this.#readTurnCount();
    }
  }
}

const app = new App();
app.play();

export default App;
