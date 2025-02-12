import readLineAsync from "./readLine.js";
import {
  validationCarNameForm,
  validationDuplicatedCarName,
  validationGameCountRange,
  validationGameCountType,
  validationInputLength,
} from "./validation.js";

class App {
  async getCarNameInput() {
    const input = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );
    try {
      validationCarNameForm(input); // 문자열 나눠서 배열로 알아서 검사
      validationDuplicatedCarName(input); // 문자열 나눠서 배열로 알아서 검사
      input.split(",").forEach((carname) => {
        validationInputLength(carname);
      });
      return input;
    } catch (err) {
      console.log(err.message);
    }
  }

  async getGameCount() {
    const input = await readLineAsync("시도할 횟수는 몇 회인가요?\n");
    try {
      validationGameCountType(input);
      validationGameCountRange(input);
      return input;
    } catch (err) {
      console.log(err.message);
    }
  }

  async run() {
    const carNames = await this.getCarNameInput();
    const cars = carNames.split(",");
    const gameCount = await this.getGameCount();
  }
}

export default App;
