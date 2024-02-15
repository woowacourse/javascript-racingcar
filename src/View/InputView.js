import readLine from 'readline';

const INPUT_MESSAGES = Object.freeze({
  carMessage:
    "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분). ",
  tryMessage: "시도할 횟수는 몇 회인가요?",
});

const InputView = {
  async readCars() {
    const carsName = await this.readLineAsync(INPUT_MESSAGES.CAR_MESSAGE);
    return carsName.split(DIVIDE_SYMBOL);
  },

  async readTry() {
    const tryNums = await this.readLineAsync(INPUT_MESSAGES.TRY_MESSAGE);

    return Number(tryNums);
  },

  readLineAsync(prompt) {
    const rl = readLine.createInterface(STD_OBJ);
    return new Promise((resolve) => {
      rl.question(prompt, (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  },
};

export default InputView;
