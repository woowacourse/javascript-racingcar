import readline from 'readline';
import Message from '../constant/Message.js';

const { ERROR } = Message;

class Console {
  static validateQuery(query) {
    return new Promise((resolve, reject) => {
      if (!query || typeof query !== 'string') {
        reject(new Error(ERROR.query));
      }

      resolve();
    });
  }

  static makeReadLineQuestion(query, rl) {
    return new Promise((resolve, reject) => {
      rl.question(query, (input) => {
        if (input === '') reject(new Error(ERROR.null));
        rl.close();
        resolve(input);
      });
    });
  }

  static async readLineAsync(query) {
    await this.validateQuery(query);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return await this.makeReadLineQuestion(query, rl);
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
