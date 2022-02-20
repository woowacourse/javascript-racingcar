import { INIT } from '../constants/constants.js';
import RandomUtils from '../utils/random.js';

export default class RacingGameModel {
  #cars = INIT.CARS;

  #round = INIT.ROUND;

  moveCarsOnce() {
    const oneMoveOfCars = this.#cars.map(() => {
      return RandomUtils.decideOneMoveAtRandom();
    });

    this.#cars.forEach((car, index) => {
      // eslint-disable-next-line no-param-reassign
      car.position += oneMoveOfCars[index];
    });
  }

  set cars(names) {
    this.#cars = names.map((name) => ({ name, position: INIT.POSITION }));
  }

  get cars() {
    return this.#cars;
  }

  set round(newRound) {
    this.#round = newRound;
  }

  get round() {
    return this.#round;
  }

  get winners() {
    return this.findWinners();
  }

  reset() {
    this.#cars = INIT.CARS;
    this.#round = INIT.ROUND;
  }

  findMaxPosition() {
    const maxPosition = this.#cars.reduce(
      (accumulator, current) => Math.max(accumulator, current.position),
      INIT.POSITION
    );

    return maxPosition;
  }

  findWinners() {
    const maxPosition = this.findMaxPosition();

    const winnerList = this.#cars
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name);

    return winnerList;
  }
}
