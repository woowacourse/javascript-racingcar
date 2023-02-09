import RandomNumber from '../constants/RandomNumber';
import Random from '../utils/Random';
import Car from './Car';

class Race {
  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  moveOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.randomNumberBetween(
        RandomNumber.INCLUSIVE,
        RandomNumber.EXCLUSIVE,
      );

      if (randomNumber >= RandomNumber.MOVE_CONDITION) car.move();
    });
  }

  getCars() {
    return this.#cars;
  }

  getWinners() {
    const positions = this.#cars.map((car) => car.getRaceState().position);
    const maxPosition = Math.max(...positions);

    return this.#cars.filter((car) => car.getRaceState().position === maxPosition);
  }
}

export default Race;
