import Printer from './Printer.js';
import { OutputMessage } from './constants/OutputMessage.js';

class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  raceTurn(isMoveList) {
    this.#cars.forEach((car, carIndex) => {
      const isMove = isMoveList[carIndex];
      if (isMove) {
        car.move();
      }
    });
  }

  runRace(tryCount, isMoveList) {
    Printer.printHeader(OutputMessage.resultHeader);

    const turns = Array.from({ length: tryCount });
    turns.forEach(() => {
      this.raceTurn(isMoveList);
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
