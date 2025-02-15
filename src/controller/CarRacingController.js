import Car from "../model/Car.js";
import InputView from "../view/Input.js";
import OutputView from "../view/Output.js";
import randomNumber from "../util/random.js";
import tryInput from "../util/tryInput.js";
import { validateCarNames, validateRaceCount } from "../util/validation.js";
import { SPLITTER } from "../constant/constant.js";

class CarRacingController {
  #carList;
  #raceCount;

  constructor() {
    this.#raceCount = 0;
  }

  async play() {
    await this.readyRace();

    OutputView.printBeforeResult();
    for (let i = 0; i < this.#raceCount; i++) {
      this.race();
      console.log("");
    }

    const winners = this.getWinners(this.#carList);
    OutputView.printWinners(winners);
  }

  async readyRace() {
    await this.setCarList();
    await this.setRaceCount();
  }

  async setCarList() {
    const carNames = await tryInput(InputView.readCarNames, validateCarNames);

    const carNamesArray = carNames.split(SPLITTER);

    this.#carList = carNamesArray.map((name) => {
      return new Car(name);
    });
  }

  async setRaceCount() {
    const raceCount = await tryInput(
      InputView.readRaceCount,
      validateRaceCount
    );

    this.#raceCount = raceCount;
  }

  race() {
    this.#carList.forEach((car) => {
      const moveCondition = randomNumber();

      car.move(moveCondition);

      OutputView.printRoundResult(car.getName(), car.getPosition());
    });
  }

  getWinners(carList) {
    const winnerPosition = this.getWinnerPosition(carList);

    return carList
      .filter((car) => car.getPosition() === winnerPosition)
      .map((winner) => winner.getName());
  }

  getWinnerPosition(carList) {
    const winnerPosition = Math.max(...carList.map((car) => car.getPosition()));

    return winnerPosition;
  }
}

export default CarRacingController;
