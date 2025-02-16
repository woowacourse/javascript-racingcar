import OutputView from "../view/OutputView.js";

export default class Winner {
  constructor() {
    this.outputView = new OutputView();
  }

  findWinner(cars) {
    const max = Math.max(...cars.map((car) => car.getPosition()));
    const winners = cars.filter((car) => car.getPosition() === max);
    this.outputView.printWinner(winners);
    return winners;
  }
}
