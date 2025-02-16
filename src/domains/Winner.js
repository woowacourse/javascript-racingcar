class Winner {
  #winners;

  constructor() {
    this.#winners = [];
  }

  getWinners(carList, maxPosition) {
    this.#winners = [];

    carList.forEach((car) => {
      this.#checkIsWinner(car, maxPosition);
    });

    return this.#winners;
  }

  #checkIsWinner(car, maxPosition) {
    if (maxPosition === car.position) {
      this.#winners.push(car.name);
    }
  }
}

export default Winner;
