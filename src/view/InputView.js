import { createInterface } from "readline";

const readLine = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const InputView = {
  readCarNames(callback) {
    readLine.question("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n", callback);
  },

  readTryCount(callback) {
    readLine.question("시도할 회수는 몇회인가요?\n", callback);
  },

  close() {
    readLine.close();
  },
};

export default InputView;
