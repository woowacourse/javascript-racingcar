const Car = require('./Car');

class CarGame {
  #carList = [];
  #moveList = [];

  initCarList(carNames) {
    carNames.forEach((carName) => {
      this.#carList.push(new Car(carName));
    });
  }

  moveCars(tryCount, getRandomNumber) {
    for (let count = 0; count < tryCount; count++) {
      const moveData = [];

      this.#carList.forEach((car) => {
        const carState = car.move(getRandomNumber());
        moveData.push(carState);
      });

      this.#moveList.push([...moveData]);
    }
  }

  getCarNames() {
    const carNames = [];

    this.#carList.forEach((car) => {
      carNames.push(car.getName());
    });

    return carNames;
  }

  getMoveDatas() {
    return this.#moveList.map((datas) => [...datas]);
  }

  getWinners() {
    let maxDistance = 0;
    let winners = [];

    this.#carList.forEach((car) => {
      if (car.getState() === maxDistance) winners.push(car.getName());
      if (car.getState() > maxDistance) {
        winners = [car.getName()];
        maxDistance = car.getState();
      }
    });

    return [...winners];
  }

  getWinners() {
    const maxDistance = Math.max(...this.#carList.map((car) => car.getState()));
    return this.#carList
      .filter((car) => maxDistance === car.getState())
      .map((car) => car.getName());
  }
}

module.exports = CarGame;
