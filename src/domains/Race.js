import Car from "./Car.js";
export default class Race {
  createCars(names) {
    return names.map((name) => new Car(name));
  }

  race(cars) {
    cars.forEach((car) => {
      const isCanMove = Car.isCanMove();
      car.move(isCanMove);
    });
  }

  getWinner(cars) {
    const positions = cars.map((car) => car.getPosition());
    const maxPosition = Math.max(...positions);
    const winnerCars = cars.filter((car) => car.getPosition() === maxPosition);
    const winnerNames = winnerCars.map((car) => car.getName());
    return winnerNames;
  }
}
