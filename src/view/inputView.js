const rl = require("./Readline");

class InputView {
  readCarNames(message, callback) {
    return new Promise((resolve, reject) => {
      rl.question(
        '경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n',
        input => (resolve(input));
      );
    });
  }

  validateCarNames(carNames) {
    if ([...new Set(carNames)].length !== carNames.length) return false;

    for (const car of carNames) {
      if (car.length > 5 || car.length === 0) return false;
    }

    return true;
  }

  readCount() {
    return new Promise((resolve, reject) => {
      rl.question('시도할 회수는 몇회인가요?\n', input => {
        const trialCount = Number(input);
        if (isNaN(trialCount)) {
          reject(new Error('[ERROR] 숫자만 입력 가능합니다.'));
        }
        resolve(trialCount);
      });
    });
  }
}

module.exports = InputView;
