import Car from './Car';

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
      .join(',');
  }
}

export default Racing;
