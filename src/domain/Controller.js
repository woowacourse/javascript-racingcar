import Car from "./Car.js";
import randomNumber from "./random.js";
import InputView from "../view/Input.js";
import OutputView from "../view/Output.js";
import tryInput from "../view/tryInput.js";
import { validateCarNames, validateRaceCount } from "./validation.js";
import { SPLITTER } from "../constant/constant.js";

class Controller {
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
    const maxPosition = Math.max(...carList.map((car) => car.getPosition()));

    return carList
      .filter((car) => car.getPosition() === maxPosition)
      .map((winner) => winner.getName());
  }
}

export default Controller;
