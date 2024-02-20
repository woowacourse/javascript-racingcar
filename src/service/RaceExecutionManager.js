import { SYSTEM_CONSTANTS } from '../constanst';
import { pickRandomNumInRange } from '../utils';

const { RANDOM_NUM_RAGE } = SYSTEM_CONSTANTS;

export default class RaceExecutionManager {
  #cars;

  #tryNum;

  constructor({ cars, tryNum }) {
    this.#cars = cars;
    this.#tryNum = tryNum;
  }

  runRace() {
    for (let i = 0; i < this.#tryNum; i += 1) {
      this.#cars.forEach((car) => {
        this.#moveCar(car);
      });
    }
  }

  #moveCar(car) {
    car.move(pickRandomNumInRange(RANDOM_NUM_RAGE.min, RANDOM_NUM_RAGE.max));
  }

  getCarRaceRecords() {
    return this.#cars.map(
      (car) => ({ name: car.getName(), records: car.getDistanceRecords() }), //
    );
  }

  findWinners() {
    return this.#cars.filter((car) => car.isWinner());
  }
}
