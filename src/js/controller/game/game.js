export default class Game {
  constructor() {}

  static startGame(cars, racingCount) {
    for (let index = 0; index < racingCount; index++) {
      cars.cars.forEach(car => {
        car.goForward();
      });
    }
  }

  static getWinners(cars) {
    const max = cars.cars[0].location;
    let winners = [];

    cars.cars.forEach(car => {
      if (car.location === max) {
        winners.push(car.name);
      }
    });

    return winners;
  }
}
