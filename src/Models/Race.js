import { MIN_FORWARD_NUMBER } from '../constants/common.js';
import { getRandomNumber } from '../utils/randomNumber.js';
import { checkIsInteger, checkTryCountRange } from '../validates/tryCountValidates.js';

class Race {
  constructor(cars, tryCount) {
    const tryCountNumber = Number(tryCount);
    checkIsInteger(tryCountNumber);
    checkTryCountRange(tryCountNumber);
    this.tryCount = tryCountNumber;
    this.cars = cars;
  }

  canMove() {
    const randomNumber = getRandomNumber();
    return randomNumber >= MIN_FORWARD_NUMBER;
  }

  movePosition() {
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
