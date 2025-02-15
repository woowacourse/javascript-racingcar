class Winner {
  #winners;

  constructor() {
    this.#winners = [];
  }

  getWinners(carList, maxPosition) {
    carList.forEach((car) => {
      this.#checkIsWinner(car, maxPosition);
    });

    return this.#winners;
  }

  #checkIsWinner(car, maxPosition) {
    if (maxPosition === car.getPosition()) {
      this.#winners.push(car.getName());
    }
  }
}

export default Winner;
