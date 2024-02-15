import CarList from './CarList';
import InputView from './views/InputView';
import OutputView from './views/OutputView';

class App {
  #carList;

  async play() {
    const carNameList = await InputView.readCarNameList();
    this.#carList = new CarList(carNameList);
    const turnCount = await InputView.readTurnCount();
    this.#race(turnCount);
    const winners = this.#carList.getWinner();
    OutputView.printWinners(winners);
  }

  #race(turnCount) {
    OutputView.print('\n실행 결과');
    for (let i = 0; i < turnCount; i += 1) {
      this.#carList.printCurrentPosition();
    }
  }
}

const app = new App();
app.play();
