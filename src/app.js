import readLineAsync from "./View/input.js";
import {
  validateCarsNameForm,
  validateDuplicatedCarName,
  validateCarsNameLength,
} from "./Validation/carName.js";
import {
  validateGameCountRange,
  validateGameCountType,
} from "./Validation/gameCount.js";

import Car from "./Model/Car.js";
import outputView from "./View/output.js";

class App {
  async getCarsName() {
    const input = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );
    try {
      validateCarsNameLength(input);
      validateCarsNameForm(input); // 문자열 나눠서 배열로 알아서 검사
      validateDuplicatedCarName(input); // 문자열 나눠서 배열로 알아서 검사
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getCarsName();
    }
  }

  async getGameCount() {
    const input = await readLineAsync("시도할 횟수는 몇 회인가요?\n");
    try {
      validateGameCountType(input);
      validateGameCountRange(input);
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getGameCount();
    }
  }

  async run() {
    const carNames = await this.getCarsName();
    const cars = carNames.split(",").map((carName) => new Car(carName));
    const gameCount = await this.getGameCount(); // TODO: Number로 변환

    outputView.printGameResult(gameCount, cars);

    outputView.printWinners(cars);
  }
}

export default App;
