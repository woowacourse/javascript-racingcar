import Input from "./view/Input.js";
import MoveCarInfo from "./MoveCarInfo.js";
import Output from "./view/Output.js";
import { MESSAGES } from "./constant/index.js";
import RaceWinner from "./RaceWinner.js";
import { randomNum } from "./util/random.js";

class RaceController {
  #carsMoveInfoList = [];
  #carsMoveExecutionList = [];

  async race() {
    const { cars, tryNumber } = await this.#input();

    this.#enterMoveCar(cars);
    this.#carsMoveExecute(tryNumber);
    this.#getCarMoveInfo();

    const raceWinner = new RaceWinner(this.#carsMoveInfoList).getRaceWinner();

    this.#print(tryNumber, raceWinner);
  }

  async #input() {
    const cars = await Input.carNameInput();
    const tryNumber = await Input.tryInput();
    return { cars, tryNumber };
  }

  #print(tryNumber, raceWinner) {
    this.#printResult(tryNumber);
    Output.printWinner(raceWinner);
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

  #getCarMoveInfo() {
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
