import RandomNumberGenerator from '../utils/RandomNumberGenerator';
import Car from './Car';
class RaceProgress {
  #carList;
  constructor(carArray = []) {
    this.#carList = carArray;
  }

  moveAllCars() {
    this.#carList.forEach((car) => {
      if (Car.canMove(RandomNumberGenerator.pickRandomNumber())) {
        car.move();
      }
    });
  }

  getEachStepString() {
    return this.#carList.reduce((pre, cur) => {
      return pre + cur.getDistanceString();
    }, '');
  }

  findWinners() {
    const maxDistance = Math.max(
      ...this.#carList.map((car) => car.getDistance())
    );
    return this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }
}

export default RaceProgress;
