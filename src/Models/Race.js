import Validate from './Validate.js';
import { MIN_FORWARD_NUMBER } from '../constants/common.js';
import { getRandomNumberInRange } from '../utils/randomNumber.js';

class Race {
  constructor(cars, tryCount) {
    const tryCountNumber = Number(tryCount);
    Validate.checkIsInteger(tryCountNumber);
    Validate.checkTryCountRange(tryCountNumber);
    this.tryCount = tryCountNumber;
    this.cars = cars;
  }

  canMove() {
    const randomNumber = getRandomNumberInRange(0, 9);
    return randomNumber >= MIN_FORWARD_NUMBER;
  }

  moveForward() {
    for (let i = 0; i < this.tryCount; i++) {
      this.cars.forEach((car) => {
        car.movePosition(this.canMove());
      });
    }
  }

  getMaxPosition() {
    const positions = this.cars.map((car) => car.getPosition());
    return Math.max(...positions);
  }

  getWinner() {
    const maxPosition = this.getMaxPosition();
    const winner = this.cars.filter((car) => car.getPosition() === maxPosition).map((car) => car.name);

    return winner;
  }
}

export default Race;
