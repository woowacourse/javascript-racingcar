import Printer from '../view/Printer.js';
import { OutputMessage } from '../constants/OutputMessage.js';

class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  raceTurn(carsMoveList) {
    this.#cars.forEach((car, carIndex) => {
      const isMove = carsMoveList[carIndex];
      if (isMove) {
        car.move();
      }
    });
  }

  runRace(totalRaceMoves) {
    Printer.printHeader(OutputMessage.resultHeader);

    totalRaceMoves.forEach((carsMoveList) => {
      this.raceTurn(carsMoveList);
      const result = this.getCarInfo(this.#cars);

      Printer.printRacingResult(result);
    });
  }

  getCarInfo() {
    const result = this.#cars.map((car) => {
      const position = car.getCarPosition();
      const name = car.getName();
      return { name, position };
    });

    return result;
  }

  decideWinner() {
    const results = this.getCarInfo();
    const positions = results.map((result) => result.position);
    const maxPosition = Math.max(...positions);
    return results.filter((result) => result.position === maxPosition);
  }
}

export default Racing;
