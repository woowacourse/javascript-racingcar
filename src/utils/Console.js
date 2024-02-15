import readline from 'readline';

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
          reject(new Error('[ERROR] 입력은 공백이 될 수 없습니다.'));
        }

        console.log(input);
        resolve(input);
      });
    });
  }
}

export default Console;
