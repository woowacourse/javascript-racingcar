import Car from './Car';
import OutputView from './views/OutputView';
import CONFIG from './constants/config';
import { MESSAGE } from './constants/message';

class Race {
  #carList;

  constructor(carNameList) {
    this.#carList = carNameList.map((carName) => new Car(carName));
  }

  runRace(turnCount) {
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: turnCount }).forEach(() => {
      const turnResult = this.#getTurnResult();
      OutputView.printTurnResult(turnResult);
    });
  }

  #getTurnResult() {
    return this.#carList.map((car) => {
      this.#moveCar(car);
      return {
        name: car.name,
        position: car.position,
      };
    });
  }

  #moveCar(car) {
    if (this.#isMetConditionToMoveCar(this.#pickRandomNumber())) {
      car.move();
    }
  }

  #isMetConditionToMoveCar(pickedNumber) {
    return pickedNumber >= CONFIG.CAR_MOVING_CONDITION;
  }

  #pickRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  get winner() {
    const maxPosition = Math.max(...this.#carList.map((car) => car.position));
    const winners = this.#carList.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default Race;
