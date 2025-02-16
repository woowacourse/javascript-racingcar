import getRandomValueInRange from '../utils/getRandomValueInRange.js';

class Racing {
  carList;

  constructor(carList) {
    this.carList = carList;
  }

  getWinner() {
    const maxPosition = Math.max(
      ...this.carList.map((car) => car.getCarStatus().position),
    );
    return this.carList
      .filter((car) => car.getCarStatus().position === maxPosition)
      .map((car) => car.getCarStatus().name);
  }

  raceOnce() {
    this.carList.forEach((car) => {
      car.move(getRandomValueInRange(0, 9));
    });
  }
}

export default Racing;
