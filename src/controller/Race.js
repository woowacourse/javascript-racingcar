import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { splitByComma, trimAll } from "../utils/parse.js";
import Cars from "../domain/Cars.js";
import Car from "../domain/Car.js";

import { tryUntilSuccess } from "../utils/tryUntilSuccess.js";
import { ERROR_MESSAGE } from "../constants/message.js";

export default class Race {
  static MIN_ROUND_NUMBER = 1;
  static MAX_ROUND_NUMBER = 100;

  async start() {
    const cars = await tryUntilSuccess(this.#getCars.bind(this))();
    const roundNumber = await tryUntilSuccess(
      this.#getRoundNumber.bind(this)
    )();
    this.#runRounds(cars, roundNumber);
  }

  async #getCars() {
    const rawCarNames = await InputView.readCarNames();
    const parsedCarNames = this.#parseCarNames(rawCarNames);
    const cars = this.#makeCars(parsedCarNames);

    return cars;
  }

  #parseCarNames(rawCarNames) {
    const parsedCarNames = splitByComma(rawCarNames);
    return trimAll(parsedCarNames);
  }

  #makeCars(carNames) {
    return new Cars(carNames.map((name) => new Car(name)));
  }

  async #getRoundNumber() {
    const rawRoundNumber = await InputView.readRoundNumber();
    const roundNumber = Number(rawRoundNumber);

    this.#validateRoundNumber(roundNumber);

    return roundNumber;
  }

  #validateRoundNumber(number) {
    if (!Number.isInteger(number)) {
      throw new Error(ERROR_MESSAGE.notInteger);
    }

    if (number < Race.MIN_ROUND_NUMBER || number > Race.MAX_ROUND_NUMBER) {
      throw new Error(ERROR_MESSAGE.invalidRoundNumber);
    }
  }

  #runRounds(cars, roundNumber) {
    OutputView.printBlankLine();
    OutputView.printResultIntro();

    for (let i = 0; i < roundNumber; i++) {
      this.#processRound(cars);
    }

    this.#showWinners(cars);
  }

  #processRound(cars) {
    cars.goAll();
    const mileageBoard = cars.getMileageBoard();

    OutputView.printMileageBoard(mileageBoard);
    OutputView.printBlankLine();
  }

  #showWinners(cars) {
    const winners = cars.getFirstPlaceNames();

    OutputView.printWinners(winners);
  }
}
