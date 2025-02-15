import { RACE } from '../Constants/message.js';
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
    const raceResult = this.#raceResult
      .map(
        (round) =>
          `${round
            .map(
              ({ name, position }) =>
                `${name} : ${RACE.MOVEMENT.repeat(position)}`,
            )
            .join('\n')}\n`,
      )
      .join('\n');

    return raceResult;
  }
}
