import CarList from './CarList';
import { CONFIG, MESSAGE } from './constants';
import { InputView, OutputView } from './views';
import pickRandomNumber from './utils/pickRandomNumber';

class App {
  async play() {
    const carNameList = await InputView.readCarNameList();
    const turnCount = await InputView.readTurnCount();
    const carList = new CarList(carNameList);
    this.#race(carList, turnCount);
    const winners = carList.getWinner();
    OutputView.printWinners(winners);
  }

  #race(carList, turnCount) {
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: turnCount }).forEach(() => {
      this.#moveCars(carList);
      OutputView.print();
    });
  }

  #moveCars(carList) {
    carList.cars.forEach((car) => {
      const randomNumber = pickRandomNumber();
      if (randomNumber >= CONFIG.CAR_MOVING_CONDITION) car.move();
      OutputView.printCarPosition(car.name, car.position);
    });
  }
}

const app = new App();
app.play();

export default App;
