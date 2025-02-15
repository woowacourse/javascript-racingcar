import { MAX, MIN } from '../Constants/rules.js';
import { getRandomNumber } from '../Utils/math.js';
import { RACE } from '../Constants/message.js';

export default class Race {
  #cars;

  #gameCount;

  constructor(gameCount, cars) {
    this.#gameCount = gameCount;
    this.#cars = cars;
  }

  startRace() {
    console.log(`\n${RACE.RESULT_INSTRUCTION}`); // TODO: View 로 이동
    for (let round = 0; round < this.#gameCount; round += 1) {
      this.#startRound();
      console.log(''); // TODO: View 로 이동
    }
  }

  #startRound() {
    this.#cars.forEach((car) => {
      const randomNumber = getRandomNumber(
        MAX.RANDOM_NUMBER,
        MIN.RANDOM_NUMBER,
      );

      car.move(randomNumber);
      console.log(
        `${car.getName()} : ${RACE.MOVEMENT.repeat(car.getPosition())}`,
      );
      // TODO: View로 이동
    });
  }
}
