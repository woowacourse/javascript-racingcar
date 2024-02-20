import RaceExecutionManager from '../service/raceExecutionManager';
import { executeOrRetryAsync } from '../utils';
import { CarValidator, CommonValidator, TryNumValidator } from '../validator';
import Car from '../domain/car';

export default class RacingGameController {
  #input;

  #output;

  constructor({ inputView, outputView }) {
    this.#input = inputView;
    this.#output = outputView;
  }

  async run() {
    const { cars, tryNum } = await this.#setupCarsAndTryNum();

    const raceExecuteManager = new RaceExecutionManager({ cars, tryNum });
    const { raceRecords, winner } = raceExecuteManager.executeRaceAndCollectResults();

    this.#output.printRaceRecords(raceRecords, tryNum);
    this.#output.printRaceResult(winner);
  }

  async #setupCarsAndTryNum() {
    const cars = await executeOrRetryAsync(this.#setupCarsFromInput.bind(this), console.log);
    const tryNum = await executeOrRetryAsync(this.#setupTryNumFromInput.bind(this), console.log);

    return { cars, tryNum };
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
}
