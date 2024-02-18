import { SYSTEM_CONSTANTS } from '../Constants';
import { pickRandomNumInRange } from '../utils';

const { RANDOM_NUM_RAGE } = SYSTEM_CONSTANTS;

export default class RaceExecutionManager {
  #raceInfo;

  #output;

  constructor(raceInfo, ouputView) {
    this.#raceInfo = raceInfo;
    this.#output = ouputView;
  }

  executeRace() {
    this.#runRace();
    return this.#findWinners();
  }

  #runRace() {
    this.#output.printBlankLine();
    for (let i = 0; i < this.#raceInfo.tryNum; i += 1) {
      this.#raceInfo.cars.forEach((car) => this.#moveCarAndPrintDistance(car));
      this.#output.printBlankLine();
    }
  }

  #moveCarAndPrintDistance(car) {
    car.move(pickRandomNumInRange(RANDOM_NUM_RAGE.min, RANDOM_NUM_RAGE.max));
    this.#output.printCarCurrentDistance(car);
  }

  #findWinners() {
    return this.#raceInfo.cars.filter((car) => car.isWinner());
  }
}
