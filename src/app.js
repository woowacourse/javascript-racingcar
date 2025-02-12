import readLineAsync from "./readLine.js";
import {
  validationCarNameForm,
  validationDuplicatedCarName,
  validationGameCountRange,
  validationGameCountType,
  validationInputLength,
} from "./validation.js";

import Car from "./Car.js";
import { getRandomNumber } from "./util.js";

class App {
  async getCarNameInput() {
    const input = await readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분).\n"
    );
    try {
      validationInputLength(input);
      validationCarNameForm(input); // 문자열 나눠서 배열로 알아서 검사
      validationDuplicatedCarName(input); // 문자열 나눠서 배열로 알아서 검사
      return input;
    } catch (err) {
      console.log(err.message);
      return this.getCarNameInput();
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
      return this.getGameCount();
    }
  }

  async run() {
    const carNames = await this.getCarNameInput();
    const cars = carNames.split(",").map((carName) => new Car(carName));
    const gameCount = await this.getGameCount();

    console.log("\n실행 결과");
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber();
        car.move(randomNumber);
        console.log(`${car.name} : ${"-".repeat(car.position)}`);
      });
      console.log("");
    }
  }
}

export default App;
