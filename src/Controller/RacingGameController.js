import { SYSTEM_CONSTANTS } from '../Constants';
import Car from '../Model/Car';
import { CarValidator, CommonValidator, TryNumValidator } from '../Validator';
import { InputView, OutputView } from '../View';
import { pickRandomNumInRange } from '../utils';

const { RANDOM_NUM_RAGE } = SYSTEM_CONSTANTS;

export default class RacingGameController {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    this.#cars = await this.#executeOrRetryAsync(this.#setupCarsFromInput.bind(this));
    const tryNum = await this.#executeOrRetryAsync(this.#setupTryNumFromInput.bind(this));

    this.#runRace(tryNum);

    this.#declareResult();
  }

  async #executeOrRetryAsync(asyncFn, context) {
    try {
      return await asyncFn.call(context);
    } catch (error) {
      console.log(error.message);
      return this.#executeOrRetryAsync(asyncFn, context);
    }
  }

  async #setupCarsFromInput() {
    const carNames = await this.#input.readCars();
    CommonValidator.check(carNames);
    CarValidator.checkCarName(carNames);

    return carNames.map((name) => new Car(name));
  }

  async #setupTryNumFromInput() {
    const tryInput = await this.#input.readTry();
    CommonValidator.check(tryInput);
    TryNumValidator.checkTryNum(tryInput);

    return Number(tryInput);
  }

  #runRace(tryNum) {
    Array.from({ length: tryNum }, () => {
      this.#cars.forEach((car) => {
        this.#moveCarAndPrintDistance(car);
      });
    });
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
