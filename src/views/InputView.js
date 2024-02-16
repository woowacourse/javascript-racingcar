import readline from 'readline';
import MESSAGES from '../constants/Messages.js';
import Cars from '../entities/Cars.js';
import TrialCount from '../entities/TrialCount.js';
import OutputView from './outputView.js';

const Private = {
  readCarNames() {
    return Private.readLineAsync(MESSAGES.carNamesInput);
  },

  readTrialCount() {
    return Private.readLineAsync(MESSAGES.trialCountInput);
  },

  readLineAsync(query) {
    return new Promise((resolve, reject) => {
      if (arguments.length !== 1) {
        reject(new Error('arguments must be 1'));
      }

      if (typeof query !== 'string') {
        reject(new Error('query must be string'));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, input => {
        rl.close();
        resolve(input);
      });
    });
  },

  async robustInput(readline, Object) {
    while (true) {
      try {
        return new Object(await readline());
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  },
};

const InputView = {
  readCarNames() {
    return Private.robustInput(Private.readCarNames, Cars);
  },

  readTrialCount() {
    return Private.robustInput(Private.readTrialCount, TrialCount);
  },
};

export default InputView;
