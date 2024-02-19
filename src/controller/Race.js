import Car from "../domain/Car.js";
import Cars from "../domain/Cars.js";
import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import { splitByComma, trimAll } from "../utils/parse.js";
import { tryUntilSuccess } from "../utils/tryUntilSuccess.js";
import { validateRoundNumber } from "../validate.js";
import { STANDARD_VALUE } from "../constants/standardValue.js";

export default class Race {
  static MIN_ROUND_NUMBER = STANDARD_VALUE.minRoundNumber;
  static MAX_ROUND_NUMBER = STANDARD_VALUE.maxRoundNumber;

  async start() {
    const cars = await tryUntilSuccess(this.#getCars.bind(this))();
    const roundNumber = await tryUntilSuccess(
      this.#getRoundNumber.bind(this)
    )();

    this.#runRounds(cars, roundNumber);
    this.#showWinners(cars);
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

    validateRoundNumber(roundNumber, {
      min: Race.MIN_ROUND_NUMBER,
      max: Race.MAX_ROUND_NUMBER,
    });

    return roundNumber;
  }

  #runRounds(cars, roundNumber) {
    OutputView.printBlankLine();
    OutputView.printResultIntro();

    for (let round = 0; round < roundNumber; round++) {
      this.#processRound(cars);
    }
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
