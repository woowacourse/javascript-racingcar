import InputView from "../view/InputView.js";
import Car from "../model/Car.js";
import { INPUT_MESSAGE, OUTPUT_MESSAGE } from "../constants/constants.js";
import { CAR } from "../constants/constants.js";
export default class Controller {
  async run() {
    const inputView = new InputView();
    const carsInput = await inputView.readLineAsync(INPUT_MESSAGE.CAR_NAMES);
    const carNames = carsInput.split(",").map((carName) => carName.trim());

    const tryCount = await inputView.readLineAsync(INPUT_MESSAGE.TRY_COUNT);

    const cars = [];
    carNames.forEach((carName) => {
      cars.push(new Car(carName));
    });
    this.runRace(cars, tryCount);
    this.findWinner(cars);
  }

  runRace(cars, tryCount) {
    console.log(OUTPUT_MESSAGE.RESULT);
    for (let i = 0; i < tryCount; i++) {
      this.gameRound(cars);
    }
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((x) => x.position));
    const winners = cars.filter((car) => car.position === max);
    console.log(
      `최종 우승자: ${winners.map((winner) => winner.name).join(", ")}`,
    );
  }

  gameRound(cars) {
    cars.forEach((car) => {
      if (this.isMove(this.getRandomNumber())) car.move();
      console.log(
        `${car.name} : ${OUTPUT_MESSAGE.PROGRESS_SYMBOL.repeat(car.position)}`,
      );
    });
    console.log("");
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  isMove(number) {
    if (number >= CAR.PROGRESS_CRITERIA) return true;
    return false;
  }
}
