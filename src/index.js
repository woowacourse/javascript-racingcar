import Race from './Race';
import InputView from './views/InputView';
import OutputView from './views/OutputView';

class App {
  async play() {
    const carNameList = await InputView.readCarNameList();
    const turnCount = await InputView.readTurnCount();

    const race = new Race(carNameList);
    race.runRace(turnCount);

    OutputView.printWinners(race.winner);
  }
}

const app = new App();
app.play();

export default App;
