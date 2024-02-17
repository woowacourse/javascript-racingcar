class Referee {
  #winnerList = [];

  constructor(carList) {
    this.#judgementWinner(carList);
  }

  #judgementWinner(carList) {
    const winnerPoint = Math.max(
      ...carList.map((car) => car.getCarInfo().step),
    );

    if (winnerPoint) {
      carList.forEach((car) => {
        const { step, name } = car.getCarInfo();

        if (step === winnerPoint) this.#winnerList.push(name);
      });
    }
  }

  getWinnerList() {
    return this.#winnerList;
  }
}

export default Referee;
