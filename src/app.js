import readLineAsync from "./readLine.js";
import {
  validateCarsNameForm,
  validateDuplicatedCarName,
  validateGameCountRange,
  validateGameCountType,
  validateCarsNameLength,
} from "./validate.js";

import Car from "./Car.js";
import { getRandomNumber } from "./util.js";

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

    console.log("\n실행 결과");
    for (let count = 0; count < gameCount; count += 1) {
      cars.forEach((car) => {
        const randomNumber = getRandomNumber();
        car.move(randomNumber);
        console.log(`${car.name} : ${"-".repeat(car.position)}`);
      });
      console.log("");
    }

    const carPositions = cars.map((car) => car.position);

    const winnerPosition = Math.max(...carPositions);
    const winners = cars
      .filter((car) => car.position === winnerPosition)
      .map((car) => car.name)
      .join(", ");
    console.log(`최종 우승자: ${winners}`);
  }
}

export default App;
