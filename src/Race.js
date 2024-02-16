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
      this.proceedTurn(this.#carList);
      OutputView.printTurnResult(this.getTurnResult(this.#carList));
    });
  }

  proceedTurn(carList) {
    carList.forEach((car) => {
      const randomNumber = pickRandomNumber();
      this.moveCar(car, randomNumber);
    });
  }

  getTurnResult(carList) {
    return carList.map((car) => ({
      name: car.name,
      position: car.position,
    }));
  }

  isMetConditionToMoveCar(pickedNumber) {
    return pickedNumber >= CONFIG.CAR_MOVING_CONDITION;
  }

  moveCar(car, randomNumber) {
    if (this.isMetConditionToMoveCar(randomNumber)) {
      car.move();
    }
  }

  getWinner(carList = this.#carList) {
    const maxPosition = Math.max(...carList.map((car) => car.position));
    const winners = carList.filter((car) => car.position === maxPosition);
    return winners.map((car) => car.name);
  }
}

export default Race;
