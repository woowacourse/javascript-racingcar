import InputView from "../view/InputView.js";
import Car from "../model/Car.js";

export default class Controller {
  async run() {
    const inputView = new InputView();
    const cars = await inputView.readLineAsync(
      "경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분)."
    );
    const carNames = cars.split(",").map((carName) => carName.trim());

    const tryCount = await inputView.readLineAsync(
      "시도할 횟수는 몇 회인가요?"
    );

    this.runRace(carNames, tryCount);
  }

  runRace(carNames, tryCount) {
    const cars = [];
    carNames.forEach((carName) => {
      cars.push(new Car(carName));
    });
    console.log("실행 결과");
    for (let i = 0; i < tryCount; i++) {
      this.gameRound(cars);
    }
  }
}
