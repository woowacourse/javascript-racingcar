import { ErrorMessages, Messages } from '../constants/Messages';
import Console from '../utils/Console';
import OutputView from './OutputView';

const InputView = {
  async readCarNames() {
    const carnamesString = await Console.readline(Messages.READ_CAR_NAMES);
    const carNames = carnamesString.split(',');

    InputView.validateCarNames(carNames);
    return carNames;
  },

  validateCarNames(carNames) {
    if (carNames.some((carName) => carName.length > 5)) {
      throw new Error(ErrorMessages.CAR_NAME_LENGTH_LIMIT);
    }
  },

  async readRaceStep() {
    const raceStepString = await Console.readline(Messages.READ_RACE_STEP);
    const raceStep = Number(raceStepString);

    InputView.validateRaceStep(raceStep);

    return raceStep;
  },

  validateRaceStep(raceStep) {
    if (!Number.isInteger(raceStep)) {
      throw new Error(ErrorMessages.RACE_STEP_NOT_INTEGER);
    }
    if (raceStep < 1) {
      throw new Error(ErrorMessages.RACE_STEP_NOT_POSITIVE);
    }
  },

  // async repeat(fn) {
  //   try {
  //     const answer = await fn();
  //     return answer;
  //   } catch (error) {
  //     OutputView.printError(error);
  //     return InputView.repeat(fn);
  //   }
  // },
};

export default InputView;
