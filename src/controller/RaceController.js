import { MESSAGE } from '../constants';
import Car from '../domain/Car';
import getRandomNumber from '../utils/getRandomNumber';
import { OutputView } from '../view';
import raceWinnerController from './RaceWinnerController';

class RaceController {
  #carList;
  #raceCount;

  constructor(carNameList, raceCount) {
    this.#carList = carNameList.map((carName) => new Car(carName));
    this.#raceCount = raceCount;
  }

  start() {
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: this.#raceCount }).forEach(() => {
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
    const maxPosition = Math.max(...this.#carList.map((car) => car.position));
    raceWinnerController.showWinner(this.#carList, maxPosition);
  }
}

export default RaceController;
