import { SYMBOL } from '../Constants/Constants';
import { VIEW_MESSAGES } from '../Constants/Messages';
import Car from '../Model/Car';
import CarValidator from '../Validator/CarValidator';
import CommonValidator from '../Validator/CommonValidator';
import TryNumValidator from '../Validator/TryNumValidator';
import InputView from '../View/InputView';
import OutputView from '../View/OutputView';

const { RESULT_MESSAGE } = VIEW_MESSAGES;
const { BLANK_SYMBOL } = SYMBOL;

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
        car.move(this.#makeRandomNumber1to10());
        this.#output.printCarCurrentDistance(car);
      });
      console.log(BLANK_SYMBOL);
    }
  }

  #makeRandomNumber1to10() {
    return Math.floor(Math.random() * 10);
  }

  #findWinners() {
    return this.#cars.filter((car) => car.isWinner());
  }
}
