import Input from "../view/Input.js";
import MoveCarInfo from "../domain/MoveCarInfo.js";
import Output from "../view/Output.js";
import { MESSAGES, ERROR } from "../constant/index.js";
import RaceWinner from "../domain/RaceWinner.js";
import { randomNum } from "../util/random.js";
import Cars from "../domain/Cars.js";
import Validation from "../util/Validation.js";
const { NOT_NATURAL_NUMBER } = ERROR;
class RaceController {
  #carsMoveInfoList = [];
  #carsMoveExecutionList = [];

  async race() {
    const { cars, tryNumber } = await this.#input();
    this.#controlCarMove(cars, tryNumber);
    const raceWinner = new RaceWinner(this.#carsMoveInfoList).getRaceWinner();
    this.#print(tryNumber, raceWinner);
  }

  async #input() {
    const cars = await this.#carsInput();
    const tryNumber = await this.#tryNumberInput();
    return { cars, tryNumber };
  }

  async #carsInput() {
    try {
      const carList = await Input.carNameInput();
      const cars = this.#carValidation(carList);
      return cars;
    } catch (error) {
      console.log(error.message);
      return this.#carsInput();
    }
  }

  #carValidation(carList) {
    const car = new Cars(carList.split(","));
    return car.getCarList();
  }

  async #tryNumberInput() {
    try {
      const tryNumber = await Input.tryInput();
      this.#tryNumberValidation(tryNumber);
      return tryNumber;
    } catch (error) {
      console.log(error.message);
      return this.#tryNumberInput();
    }
  }

  #tryNumberValidation(tryNumber) {
    if (!Validation.isNaturalNumber(tryNumber)) {
      throw new Error(NOT_NATURAL_NUMBER);
    }
  }

  #print(tryNumber, raceWinner) {
    this.#printResult(tryNumber);
    Output.printWinner(raceWinner);
  }

  #controlCarMove(cars, tryNumber) {
    this.#enterMoveCar(cars);
    this.#carsMoveExecute(tryNumber);
    this.#saveCarMoveInfo();
  }

  #enterMoveCar(cars) {
    cars.map((car) => this.#carsMoveExecutionList.push(new MoveCarInfo(car)));
  }

  #carsMoveExecute(tryNumber) {
    for (let i = 0; i < tryNumber; i++) {
      this.#carsMoveExecutionList.forEach((move) => {
        move.move(randomNum());
      });
    }
  }

  #saveCarMoveInfo() {
    this.#carsMoveExecutionList.map((carMoveExecution) =>
      this.#carsMoveInfoList.push(carMoveExecution.getCarMoveInfo())
    );
  }

  #printResult(tryNumber) {
    console.log(MESSAGES.RESULT);
    for (let i = 0; i < tryNumber; i++) {
      this.#carsMoveInfoList.map((moveInfo) => {
        Output.printMove(moveInfo, i + 1);
      });
      console.log("");
    }
  }
}

export default RaceController;
