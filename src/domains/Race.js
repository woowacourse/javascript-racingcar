import Car from "./Car.js";
export default class Race {
  #cars = [];

  createCars(names) {
    this.#cars = names.map((name) => new Car(name));
  }

  race() {
    this.#cars.forEach((car) => {
      const isCanMove = Car.isCanMove();
      car.move(isCanMove);
    });
    return this.#cars;
  }

  getWinner() {
    const positions = this.#cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);
    const winnerCars = this.#cars.filter(
      (car) => car.getPosition() === maxPosition
    );
    const winnerNames = winnerCars.map((car) => car.getName());
    return winnerNames;
  }
}
