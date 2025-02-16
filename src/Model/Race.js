import { CAR_MOVE_FORWARD, MAX, MIN } from '../Constants/rules.js';
import { getRandomNumber } from '../Utils/math.js';

export default class Race {
  #cars;

  #gameCount;

  #raceResult;

  constructor(gameCount, cars) {
    this.#gameCount = gameCount;
    this.#cars = cars;
    this.#raceResult = Array.from({ length: gameCount }, () => []);
  }

  startRace() {
    for (let round = 0; round < this.#gameCount; round += 1) {
      this.#startRound(round);
    }
  }

  #startRound(round) {
    this.#cars.forEach((car) => {
      const randomNumber = getRandomNumber(
        MAX.RANDOM_NUMBER,
        MIN.RANDOM_NUMBER,
      );
      if (randomNumber >= CAR_MOVE_FORWARD) {
        car.move();
      }
      this.#raceResult[round].push({
        name: car.getName(),
        position: car.getPosition(),
      });
    });
  }

  getRaceResult() {
    return this.#raceResult;
  }

  getWinners() {
    const lastRound = this.#gameCount - 1;
    const winnerPosition = Math.max(
      ...this.#raceResult[lastRound].map(({ position }) => position),
    );
    const winners = this.#raceResult[lastRound]
      .filter(({ position }) => position === winnerPosition)
      .map(({ name }) => name);

    return winners;
  }
}
