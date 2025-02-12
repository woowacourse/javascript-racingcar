import getRandomNumber from './utils/getRandomNumber.js';

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
}

export default Racing;
