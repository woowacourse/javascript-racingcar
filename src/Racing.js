import getRandomValue from './utils/getRandomValue.js';

class Racing {
  carList;
  count;

  constructor(carList, count) {
    this.carList = carList;
    this.count = count;
  }

  getWinner() {
    const maxPosition = Math.max(...this.carList.map((car) => car.position));
    return this.carList
      .filter((car) => car.position === maxPosition)
      .map((car) => car.name)
      .join(', ');
  }

  start() {
    console.log('\n실행 결과');
    for (let i = 0; i < this.count; i++) {
      this.carList.forEach((car) => {
        car.move(getRandomValue());
        console.log(car.getRacingStatus());
      });
      console.log();
    }
    console.log(`최종 우승자: ${this.getWinner()}`);
  }
}

export default Racing;
