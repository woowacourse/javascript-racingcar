import Input from "./view/Input.js";
import Car from "./Car.js";
import Validator from "./Validator.js";
import Output from "./view/Output.js";

export default class Race {
  #cars = [];
  // 우승자 계산
  // 출력

  async play() {
    // 자동차 입력
    const carNames = await Input.carName();
    const parseCars = carNames.toString().split(",");

    Validator.carNamesAndCount(parseCars);

    parseCars.forEach((carName) => {
      this.#cars.push(new Car(carName));
    });

    // 시도 횟수 입력
    const tryCount = await Input.tryCount();
    const parseTryCount = parseInt(tryCount);

    Validator.tryCount(parseTryCount);
  }
}
