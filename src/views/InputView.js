import { ErrorMessages, Messages } from '../constants/Messages';
import Console from '../utils/Console';
import OutputView from './OutputView';

class InputView {
  static async readCarNames() {
    return InputView.repeat(async () => {
      const carnamesString = await Console.readline(Messages.READ_CAR_NAMES);
      const carNames = carnamesString.split(',');

      InputView.#validateCarNames(carNames);
      return carNames;
    });
  }

  static #validateCarNames(carNames) {
    if (!carNames.every((carName) => carName.length <= 5)) {
      throw new Error(ErrorMessages.CAR_NAME_LENGTH_LIMIT);
    }
  }

  static async readRaceStep() {
    return InputView.repeat(async () => {
      const raceStepString = await Console.readline(Messages.READ_RACE_STEP);
      const raceStep = Number(raceStepString);

      InputView.#validateRaceStep(raceStep);

      return raceStep;
    });
  }

  static #validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) {
      throw new Error(ErrorMessages.RACE_STEP_NOT_INTEGER);
    }
    if (raceStep <= 0) {
      throw new Error(ErrorMessages.RACE_STEP_NOT_POSITIVE);
    }
  }

  static async repeat(fn) {
    try {
      const answer = await fn();
      return answer;
    } catch (error) {
      OutputView.printError(error);
      return InputView.repeat(fn);
    }
  }
}

export default InputView;
