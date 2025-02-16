class CarRacing {
  #carList;

  constructor(carList) {
    this.#carList = carList;
  }

  raceOneRound() {
    this.#carList.forEach((car) => {
      const moveCondition = randomNumber();

      car.move(moveCondition);
    });
  }

  getCarList() {
    return this.#carList;
  }
}
