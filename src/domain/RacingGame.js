import Car from './Car.js';
import { GAME_CONDITION } from '../constants/Condition.js';

export default class RacingGame {
  #cars;
  #round;

  constructor(carNames, round) {
    this.#cars = carNames.map((carName) => new Car(carName));
    this.#round = round;
  }

  race(randomNumberGenerator) {
    this.#cars.forEach((car) => {
      const randomNumber = randomNumberGenerator();

      if (randomNumber >= GAME_CONDITION.maxMovableNumber) {
        car.move();
      }
    });

    this.#round -= 1;
  }

  getRoundResult() {
    return this.#cars.map((car) => {
      const name = car.getName();
      const position = car.getPosition();

      return { name, position };
    });
  }

  getWinners(highestScore) {
    return this.#cars
      .filter((car) => car.getPosition() === highestScore)
      .map((car) => car.getName());
  }

  getHighestScore() {
    return Math.max(...this.#cars.map((car) => car.getPosition()));
  }

  isPlaying() {
    return this.#round > 0;
  }
}
