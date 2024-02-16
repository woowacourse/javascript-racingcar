import Car from './Car';
import OutputView from './views/OutputView';
import CONFIG from './constants/config';
import { MESSAGE } from './constants/message';
import pickRandomNumber from './utils/pickRandomNumber';

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
    const randomNumber = pickRandomNumber();
    if (this.#isMetConditionToMoveCar(randomNumber)) {
      car.move();
    }
  }

  #isMetConditionToMoveCar(pickedNumber) {
    return pickedNumber >= CONFIG.CAR_MOVING_CONDITION;
  }

  get winner() {
    const maxPosition = Math.max(...this.#carList.map((car) => car.position));
    const winners = this.#carList.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default Race;
