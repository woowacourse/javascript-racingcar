import { SYSTEM_CONSTANTS } from '../Constants';
import Car from '../Model/Car';
import { CarValidator, CommonValidator, TryNumValidator } from '../Validator';
import { InputView, OutputView } from '../View';
import GameSetupManager from '../service/GameSetupManager';
import { pickRandomNumInRange } from '../utils';

const { RANDOM_NUM_RAGE } = SYSTEM_CONSTANTS;

export default class RacingGameController {
  #cars;

  #output = OutputView;

  async run() {
    const gameSetupManager = new GameSetupManager(InputView);
    const { cars, tryNum } = await gameSetupManager.setup();

    this.#cars = cars;

    this.#runRace(tryNum);
    this.#declareResult();
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i++) {
      this.#cars.forEach((car) => this.#moveCarAndPrintDistance(car));
      console.log(``);
    }
  }

  #moveCarAndPrintDistance(car) {
    car.move(pickRandomNumInRange(RANDOM_NUM_RAGE.min, RANDOM_NUM_RAGE.max));
    this.#output.printCarCurrentDistance(car);
  }

  #declareResult() {
    this.#output.printRaceResultHeader();
    const winners = this.#findWinners();
    this.#output.printWinner(winners);
  }

  #findWinners() {
    return this.#cars.filter((car) => car.isWinner());
  }
}
