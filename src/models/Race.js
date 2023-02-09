import RandomNumber from '../constants/RandomNumber';
import Random from '../utils/Random';

class Race {
  #cars;

  constructor(cars) {
    this.#cars = cars;
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
