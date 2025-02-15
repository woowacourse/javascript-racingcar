import { CONFIG } from '../constants/config.js';
import { INPUT } from '../constants/messages.js';
import splitStringToArray from '../utils/utils.js';
import AttemptsValidator from '../validator/AttemptsValidator.js';
import CarNameValidator from '../validator/CarNameValidator.js';
import readLineAsync from '../views/InputView.js';

class User {
  async readCarNames() {
    try {
      const input = await readLineAsync(INPUT.CAR_NAMES);
      const carNames = splitStringToArray(input, CONFIG.COMMA);
      carNames.forEach((carName) => {
        CarNameValidator.checkCarNameLength(carName);
        CarNameValidator.checkBlank(carName);
      });
      CarNameValidator.checkDuplicatedCarName(carNames);
      return carNames;
    } catch (err) {
      console.log(err.message);
      return this.readCarNames();
    }
  }

  async readAttempts() {
    try {
      const attempts = await readLineAsync(INPUT.ATTEMPTS);
      AttemptsValidator.checkPositiveNumber(Number(attempts));
      return attempts;
    } catch (err) {
      console.log(err.message);
      return this.readAttempts();
    }
  }
}

export default User;
