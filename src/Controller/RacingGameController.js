import { InputView, OutputView } from '../view';
import { GameSetupManager, RaceExecutionManager } from '../service';
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
    const raceInfo = await this.#setup();

    const raceExecuteManager = new RaceExecutionManager(raceInfo, OutputView);
    const winner = raceExecuteManager.executeRace();

    OutputView.printRaceResult(winner);
  }

  async #setup() {
    const cars = await executeOrRetryAsync(this.#setupCarsFromInput.bind(this));
    const tryNum = await executeOrRetryAsync(this.#setupTryNumFromInput.bind(this));

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
