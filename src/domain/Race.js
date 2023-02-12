import Random from '../utils/Random';
import Car from './Car';

class Race {
  static RANDOM_NUMBER_MIN = 0;
  static RANDOM_NUMBER_MAX = 9;
  static MOVE_CONDITION = 4;

  #cars;

  constructor(carNames) {
    this.#cars = carNames.map((name) => new Car(name));
  }

  moveOnce() {
    this.#cars.forEach((car) => {
      const randomNumber = Random.randomNumberBetween(
        Race.RANDOM_NUMBER_MIN,
        Race.RANDOM_NUMBER_MAX,
      );

      if (randomNumber >= Race.MOVE_CONDITION) car.move();
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
