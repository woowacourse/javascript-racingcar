import { Messages } from '../constants/Messages';
import Console from '../utils/Console';

const InputView = {
  async readCarNames() {
    const carnamesString = await Console.readline(Messages.READ_CAR_NAMES);
    const carNames = carnamesString.split(',');

    return carNames;
  },

  async readRaceStep() {
    const raceStepString = await Console.readline(Messages.READ_RACE_STEP);
    const raceStep = Number(raceStepString);

    return raceStep;
  },
};

export default InputView;
