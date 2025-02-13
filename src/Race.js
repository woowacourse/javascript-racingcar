import Input from "./view/Input.js";
import Car from "./Car.js";
import Validator from "./Validator.js";
import Output from "./view/Output.js";

export default class Race {
  #cars = [];
  #parseTryCount = 0;
  // 우승자 계산
  // 출력

  async play() {
    // 자동차 입력
    await this.readCarNames();

    // 시도 횟수 입력
    await this.readTryCount();

    // 레이스
    this.racing();

    // 우승자 출력
    this.getWinner();
  }

  async readCarNames() {
    const carNames = await Input.carName();
    const parseCars = carNames.toString().split(",");

    Validator.carNamesAndCount(parseCars);

    parseCars.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });
  }

  async readTryCount() {
    const tryCount = await Input.tryCount();
    this.#parseTryCount = parseInt(tryCount);

    Validator.tryCount(this.#parseTryCount);
  }

  racing() {
    Output.newLine();
    Output.raceResult();
    for (let i = 0; i < this.#parseTryCount; i += 1) {
      this.#cars.forEach((car) => {
        car.move();
        Output.scoreByRace(car.name, car.position);
      });
      Output.newLine();
    }
  }

  async getWinner() {
    const positions = this.#cars.map((car) => car.position);
    const maxPosition = Math.max(...positions);
    const winnerCars = this.#cars.filter((car) => car.position === maxPosition);
    const winnerNames = winnerCars.map((car) => car.name);
    Output.winners(winnerNames);
  }
}
