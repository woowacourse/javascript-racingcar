import { CAR_CONSTANTS, SYMBOL } from '../Constants';
import Car from '../Model/Car';
import { CarValidator, CommonValidator, TryNumValidator } from '../Validator';
import { InputView, OutputView } from '../View';
import { pickRandomNumInRange } from '../utils';

const { BLANK_SYMBOL } = SYMBOL;
const { RANDOM_NUM_RAGE } = CAR_CONSTANTS;

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
    for (let i = 0; i < tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.move(pickRandomNumInRange(RANDOM_NUM_RAGE.min, RANDOM_NUM_RAGE.max));
        this.#output.printCarCurrentDistance(car);
      });
      console.log(BLANK_SYMBOL);
    }
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
