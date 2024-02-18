import readline from 'readline';
import CONSTANTS from '../../CONSTANTS';

const { message } = CONSTANTS;

class InputView {
  static async readCarNames() {
    return await this.#readNextLineAsync(message.CAR_NAME_INPUT);
  }

  static async readMaxTryCount() {
    return await this.#readNextLineAsync(message.MAX_TRY_COUNT_INPUT);
  }

  static #readNextLineAsync(query) {
    const nextLineQuery = `${query}\n`;
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

      rl.question(nextLineQuery, input => {
        rl.close();
        resolve(input);
      });
    });
  }
}

export default InputView;
