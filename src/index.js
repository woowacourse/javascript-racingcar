import CarList from './CarList';
import CONFIG from './constants/config';
import { MESSAGE } from './constants/message';
import pickRandomNumber from './utils/pickRandomNumber';
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
        const randomNumber = pickRandomNumber();
        if (randomNumber >= CONFIG.CAR_MOVING_CONDITION) car.move();
        OutputView.printCarPosition(car.name, car.position);
      });
      OutputView.print();
    });
  }
}

const app = new App();
app.play();

export default App;
