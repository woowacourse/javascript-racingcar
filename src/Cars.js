import Car from './Car.js';
class Cars {
  #carList;
  constructor(carNameArray) {
    this.#carList = carNameArray.map((name) => new Car(name));
  }

  moveAllCars() {
    this.#carList.forEach((car) => {
      car.move();
    });
  }

  getEachStepString() {
    return this.#carList.reduce((pre, cur) => {
      return pre + cur.getDistanceString();
    }, '');
  }

  findWinner() {
    let maxDistance = 0;
    const winner = [];
    this.#carList.forEach((car) => {
      if (car.getDistance() > maxDistance) maxDistance = car.getDistance();
    });
    this.#carList.forEach((car) => {
      if (car.getDistance() === maxDistance) winner.push(car.getName());
    });
    return [...winner];
  }
}

export default Cars;
