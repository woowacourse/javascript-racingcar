import readline from 'readline';

class Console {
  static async readLineAsync(query) {
    return new Promise((resolve, reject) => {
      if (typeof query !== 'string') {
        reject(new Error('query must be string'));
      }

      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      rl.question(query, (input) => {
        rl.close();
        resolve(input);
      });
    });
  }

  static print(message) {
    console.log(message);
  }
}

export default Console;
