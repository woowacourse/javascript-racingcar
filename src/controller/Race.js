import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { splitByComma, trimAll } from "../utils/parser.js";
import Cars from "../domain/Cars.js";
import Car from "../domain/Car.js";
import { tryUntilSuccess } from "../utils/ErrorUtil.js";

export default class Race {
  static MIN_ROUND_NUMBER = 1;
  static MAX_ROUND_NUMBER = 100;

  async start() {
    const cars = await tryUntilSuccess(this.#getCars).bind(this)();
    const roundNumber = await tryUntilSuccess(this.#getRoundNumber).bind(this)();
    this.#runRounds(cars, roundNumber);
  }

  async #getCars() {
    const rawCarNames = await InputView.readCarNames();
    const parsedCarNames = this.#parseCarNames(rawCarNames);
    return this.#makeCars(parsedCarNames);
  }

  #parseCarNames() {
    const carNames = splitByComma(carNames);
    return trimAll(carNames);
  }

  async #getRoundNumber() {
    const rawRoundNumber = await InputView.readRoundNumber();
    const parsedRoundNumber = Number(rawRoundNumber);
    this.#validateRoundNumber(parsedRoundNumber);
    return parsedRoundNumber;
  }

  #validateRoundNumber(number) {
    if (!Number.isInteger(number)) {
      throw new Error("[ERROR] 정수를 입력해주세요.");
    }

    if (number < Race.MIN_ROUND_NUMBER || number > Race.MAX_ROUND_NUMBER) {
      throw new Error("[ERROR] 1 이상, 100 이하의 숫자를 입력해주세요.");
    }
  }

  #makeCars(carNames) {
    return new Cars(carNames.map((name) => new Car(name)));
  }

  #runRounds(cars, roundNumber) {
    OutputView.printResultIntro();

    for (let i = 0; i < roundNumber; i++) {
      this.#processRound(cars);
    }
    this.#showWinner(cars);
  }

  #processRound(cars) {
    cars.goAll();
    const mileageBoard = cars.getMileageBoard();
    OutputView.printMileageBoard(mileageBoard);
  }

  #showWinner(cars) {
    const winner = cars.getWinner();
    OutputView.printWinner(winner);
  }
}
