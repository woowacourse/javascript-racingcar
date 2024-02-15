import Race from '../domain/Race';
import InputView from '../view/InputView';
import OutputView from '../view/OutputView';
import { retryOnInvalidInput } from '../utils/retryOnInvalidInput';

class RaceController {
  #race;

  constructor() {
    this.#race = new Race();
  }

  async start() {
    await retryOnInvalidInput(() => this.#initCars());
    await retryOnInvalidInput(() => this.#initAttemptNum());

    this.#gameCycleStart();
    this.#gameCycleEnd();
  }

  async #initCars() {
    const carsName = await InputView.readCarsName();
    this.#race.cars = carsName;
  }

  async #initAttemptNum() {
    const attemptNum = await InputView.readAttemptNum();
    this.#race.attemptNum = attemptNum;
  }

  #gameCycleStart() {
    OutputView.printResultMessage();
    this.#race.gameCycle(cycleResult => OutputView.printNameAndCarPosition(cycleResult));
  }

  #gameCycleEnd() {
    const winners = this.#race.judgeWinner();
    OutputView.printWinners(winners);
  }
}

export default RaceController;
