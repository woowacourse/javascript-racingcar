import readline from 'readline.js';
import OutputView from 'OutputView.js';
import MESSAGES from '../constants/messages.js';

const Private = {
  readline() {
    Private.readLineAsync();
  },
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

  robustInput(readline, Object) {
    while (true) {
      try {
        return new Object(readline());
      } catch (error) {
        print(error.message);
      }
    }
  },
};

const InputView = {
  readCarNames() {
    return Private.robustInput(Private.readCarNames, Object);
  },

  readTrialCount() {
    return Private.robustInput(Private.readTrialCount, Object);
  },
};

export default InputView;
