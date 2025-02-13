import getRandomNumber from './utils/getRandomNumber.js';
import Printer from './Printer.js';

class Racing {
  #cars;

  constructor(cars) {
    this.#cars = cars;
  }

  raceTurn() {
    // todo: magic number처리
    const randomNum = getRandomNumber(0, 9);
    if (randomNum >= 4) {
      this.#cars.forEach((car) => {
        car.move();
      });
    }
  }

  // 테스트를 해야 하는가?, 어떻게 해야하는가?
  runRace(tryCount) {
    let currentCount = 0;

    Printer.printHeader('\n실행 결과');

    while (currentCount < tryCount) {
      this.raceTurn();
      const result = this.getCarInfo(this.#cars);

      Printer.printRacingResult(result);
      currentCount += 1;
    }
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
