import readline from 'readline';
import Message from '../constant/Message.js';

const { ERROR } = Message;

class Console {
  static readLineAsync(query) {
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

      rl.question(query, (input) => {
        rl.close();
        if (input === '') {
          reject(new Error(ERROR.null));
        }
        resolve(input);
      });
    });
  }

  static async errorHandler(getFunc) {
    while (true) {
      try {
        const result = await getFunc();
        return result;
      } catch (err) {
        console.log(err.message);
      }
    }
  }
}

export default Console;
