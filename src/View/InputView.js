import readLine from 'readline';

class InputView {
  async readCars() {
    const carsName = await this.readLine(
      '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분). '
    );

    return carsName.split(',');
  }

  async readTry() {
    const tryNums = await this.readLine('시도할 횟수는 몇 회인가요?');

    return Number(tryNums);
  }

  readLine(prompt) {
    const rl = readLine.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return new Promise((resolve, reject) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }
}

export default InputView;
