const getRandomNumber = require('../utils/getRandomNumber.js');
const Car = require('./Car');

class CarGame {
  #carList = [];
  #moveList = [];

  initCarList(list) {
    list.forEach((carName) => {
      this.#carList.push(new Car(carName));
    });
  }

  moveCars(tryCount) {
    for (let count = 0; count < tryCount; count++) {
      const moveData = [];
      this.#carList.forEach((car) => {
        const moveResult = car.move(getRandomNumber());
        moveData.push(moveResult);
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
    return this.#moveList.map((datas) => {
      return [...datas];
    });
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
}

module.exports = CarGame;
