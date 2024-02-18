import Car from './Car';
import CONFIG from '../constants/config';
import pickRandomNumber from '../utils/pickRandomNumber';

class Race {
  #carList;

  constructor(carNameList) {
    this.#carList = carNameList.map((carName) => new Car(carName));
  }

  proceedTurn(carList = this.#carList) {
    carList.forEach((car) => {
      const randomNumber = pickRandomNumber(CONFIG.MIN_RANDOM_NUMBER, CONFIG.MAX_RANDOM_NUMBER);
      this.moveCar(car, randomNumber);
    });
  }

  getTurnResult(carList = this.#carList) {
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
