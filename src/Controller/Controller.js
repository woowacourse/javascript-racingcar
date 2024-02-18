import { CAR_CONSTANTS, SYMBOL } from '../Constants/Constants';
import { VIEW_MESSAGES } from '../Constants/Messages';
import Car from '../Model/Car';
import CarValidator from '../Validator/CarValidator';
import CommonValidator from '../Validator/CommonValidator';
import TryNumValidator from '../Validator/TryNumValidator';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';
import pickRandomNumberInRange from '../utils/pickRandomInt';

const { RESULT_MESSAGE } = VIEW_MESSAGES;
const { BLANK_SYMBOL } = SYMBOL;
const { RANDOM_NUM_RAGE } = CAR_CONSTANTS;

export default class Controller {
  #cars;

  #input = InputView;

  #output = OutputView;

  async run() {
    const carNamesInput = await this.#promptCarNames();
    this.#cars = carNamesInput;

    const tryNum = await this.#promptTry();
    this.#runRace(tryNum);
    console.log(RESULT_MESSAGE);

    const winners = this.#findWinners();
    this.#output.printWinner(winners);
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

  #findWinners() {
    return this.#cars.filter((car) => car.isWinner());
  }
}
