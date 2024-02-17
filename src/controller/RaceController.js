import { MESSAGE } from '../constants';
import Car from '../domain/Car';
import getRandomNumber from '../utils/getRandomNumber';
import { OutputView } from '../view';
import raceWinnerController from './RaceWinnerController';

class RaceController {
  #carList;
  #turnCount;

  constructor(carNameList, turnCount) {
    this.#carList = carNameList.map((carName) => new Car(carName));
    this.#turnCount = turnCount;
  }

  start() {
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: this.#turnCount }).forEach(() => {
      this.#moveCarList();
      OutputView.print();
    });
  }

  #moveCarList() {
    this.#carList.forEach((car) => {
      this.moveCar(car, getRandomNumber());
    });
  }

  moveCar(car, randomNumber) {
    car.move(randomNumber);
    OutputView.printCarPosition(car.name, car.position);
  }

  showRaceResult() {
    raceWinnerController.showWinner(this.#carList);
  }
}

export default RaceController;
