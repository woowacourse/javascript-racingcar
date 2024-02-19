import readline from 'readline';
import Message from '../constant/Message.js';

const { ERROR } = Message;

const Console = {
  validateQuery(query) {
    return new Promise((resolve, reject) => {
      if (!query || typeof query !== 'string') {
        reject(new Error(ERROR.QUERY_NOT_NULL));
      }

      resolve();
    });
  },

  makeReadLineQuestion(query, rl) {
    return new Promise((resolve, reject) => {
      rl.question(query, (input) => {
        if (input === '') reject(new Error(ERROR.INPUT_NOT_NULL));
        rl.close();
        resolve(input);
      });
    });
  },

  async readLineAsync(query) {
    await this.validateQuery(query);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return await this.makeReadLineQuestion(query, rl);
  },

  async retryUntilSuccess(getFunc) {
    while (true) {
      try {
        const result = await getFunc();
        return result;
      } catch (err) {
        console.log(err.message);
      }
    }
  },
};

export default Console;
