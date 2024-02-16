import CarList from './CarList';
import { MESSAGE } from './constants/message';
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
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: turnCount }).forEach(() => {
      this.#carList.forEach((car) => {
        car.move();
        OutputView.printCarPosition(car.name, car.position);
      });
      OutputView.print();
    });
  }
}

const app = new App();
app.play();

export default App;
