import Car from "../model/Car.js";
import CarRacing from "../model/CarRacing.js";
import InputView from "../view/Input.js";
import OutputView from "../view/Output.js";
import tryInput from "../util/tryInput.js";
import { validateCarNames, validateRaceCount } from "../util/validation.js";
import { SPLITTER } from "../constant/constant.js";
import { getWinners } from "../util/winner.js";

class CarRacingController {
  #carRacing;
  #raceCount;

  constructor() {
    this.#raceCount = 0;
  }

  async play() {
    await this.readyRace();

    OutputView.printBeforeResult();
    this.startRacing(this.#raceCount);
    this.endRacing(this.#carRacing.getCarList());
  }

  async readyRace() {
    await this.setCarList();
    await this.setRaceCount();
  }

  async setCarList() {
    const carNames = await tryInput(InputView.readCarNames, validateCarNames);

    const carNamesArray = carNames.split(SPLITTER);

    this.#carRacing = new CarRacing(
      carNamesArray.map((name) => {
        return new Car(name);
      })
    );
  }

  async setRaceCount() {
    const raceCount = await tryInput(
      InputView.readRaceCount,
      validateRaceCount
    );

    this.#raceCount = raceCount;
  }

  startRacing(raceCount) {
    for (let i = 0; i < raceCount; i++) {
      this.#carRacing.raceOneRound();
      OutputView.printRoundResult(this.#carRacing.getCarList());
    }
  }

  endRacing(carList) {
    const winners = getWinners(carList);
    OutputView.printWinners(winners);
  }
}

export default CarRacingController;
