import RandomNumberGenerator from '../utils/RandomNumberGenerator';
import Car from './Car';
class Cars {
  #carList;
  constructor(carNameArray = []) {
    this.#carList = carNameArray.map((name) => new Car(name));
  }

  moveAllCars() {
    this.#carList.forEach((car) => {
      car.move(RandomNumberGenerator.pickRandomNumber());
    });
  }

  getEachStepString() {
    return this.#carList.reduce((pre, cur) => {
      return pre + cur.getDistanceString();
    }, '');
  }

  findWinner() {
    const maxDistance = Math.max(
      ...this.#carList.map((car) => car.getDistance())
    );
    return this.#carList
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  }
}

export default Cars;
