const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class InputView {
  readCarNames() {
    return new Promise((resolve, reject) => {
      rl.question(
        '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
        input => {
          const carNames = input.split(',');
          if (!this.isValidateCarNames(carNames)) {
            reject('다섯글자 이하의 자동차를 중복없이 입력해주세요.');
          }
          const carMap = new Map();
          const carInitialValue = carNames.reduce((acc, cur) => {
            return acc.set(cur, 1);
          }, carMap);

          resolve(carInitialValue);
        }
      );
    });
  }

  isValidateCarNames(carNames) {
    for (const car of carNames) {
      if (car.length > 5 || car.length === 0) return false;
    }

    return true;
  }

  readCount() {
    return new Promise((resolve, reject) => {
      rl.question('시도할 회수는 몇회인가요?\n', input => {
        const trialCount = Number(input);
        if (Number.isNaN(trialCount)) {
          reject(new Error('숫자만 입력 가능합니다.'));
        }
        resolve(trialCount);
      });
    });
  }
}

module.exports = InputView;
