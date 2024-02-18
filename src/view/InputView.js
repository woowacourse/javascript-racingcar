import readline from 'readline';
import MESSAGES from '../domain/constants/Messages.js';
import CarList from '../entities/CarList.js';
import TrialCount from '../entities/TrialCount.js';
import OutputView from './OutputView.js/index.js';

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

  async robustInput(readline, EntityObject) {
    while (true) {
      try {
        return new EntityObject(await readline());
      } catch (error) {
        OutputView.print(error.message);
      }
    }
  },
};

const InputView = {
  readCarNames() {
    return Private.robustInput(Private.readCarNames, CarList);
  },

  readTrialCount() {
    return Private.robustInput(Private.readTrialCount, TrialCount);
  },
};

export default InputView;
