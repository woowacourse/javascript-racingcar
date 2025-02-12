import Car from "../model/Car.js";
import InputView from "../view/Input.js";
import randomNumber from "../util/random.js";

class Controller {
  #carList;
  #raceCount;

  constructor() {
    this.#raceCount = 0;
  }

  async play() {
    await this.readyRace();

    for (let i = 0; i < this.#raceCount; i++) {
      this.race();
    }
  }

  async readyRace() {
    await this.setCarList();
    await this.setRaceCount();
  }

  async setCarList() {
    const carNames = await InputView.readCarNames();

    const carNamesArray = carNames.split(",");

    this.#carList = carNamesArray.map((name) => {
      return new Car(name);
    });
  }

  async setRaceCount() {
    const raceCount = await InputView.readRaceCount();

    this.#raceCount = raceCount;
  }

  race() {
    this.#carList.forEach((car) => {
      const moveCondition = randomNumber();

      car.move(moveCondition);
    });
  }
}

export default Controller;
