import { CAR_CONSTANTS, SYMBOL } from '../Constants';
import Car from '../Model/Car';
import { CarValidator, CommonValidator, TryNumValidator } from '../Validator';
import { InputView, OutputView } from '../View';
import pickRandomNumberInRange from '../utils/pickRandomInt';

const { BLANK_SYMBOL } = SYMBOL;
const { RANDOM_NUM_RAGE } = CAR_CONSTANTS;

export default class RacingGameController {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    this.#cars = await this.#promptCarNames();
    const tryNum = await this.#promptTry();

    this.#runRace(tryNum);

    this.#declareResult();
  }

  async #promptCarNames() {
    try {
      const carNames = await this.#input.readCars();
      CommonValidator.check(carNames);
      CarValidator.checkCarName(carNames);

      return carNames.map((name) => new Car(name));
    } catch (error) {
      console.log(error.message);
      const carNames = await this.#promptCarNames();
      return carNames;
    }
  }

  async #promptTry() {
    try {
      const tryInput = await this.#input.readTry();
      CommonValidator.check(tryInput);
      TryNumValidator.checkTryNum(tryInput);

      console.log(Number(tryInput));
      return Number(tryInput);
    } catch (error) {
      console.log(error.message);
      const tryNum = await this.#promptTry();
      return tryNum;
    }
  }

  #runRace(tryNum) {
    for (let i = 0; i < tryNum; i += 1) {
      this.#cars.forEach((car) => {
        car.move(pickRandomNumberInRange(RANDOM_NUM_RAGE.min, RANDOM_NUM_RAGE.max));
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
