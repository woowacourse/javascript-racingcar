import readline from 'readline';

class Input {
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

      rl.question(query, (input) => {
        rl.close();
        console.log(input);
        resolve(input);
      });
    });
  }

  async inputCarName() {
    const input = await this.readLineAsync(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).'
    );

    return input;
  }

  async inputTryCount() {
    const input = await this.readLineAsync('시도할 횟수는 몇 회인가요?');

    return input;
  }
}

export default Input;
