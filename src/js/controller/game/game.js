export default class Game {
  constructor() {}

  static startGame(cars, racingCount) {
    for (let index = 0; index < racingCount; index++) {
      cars.cars.forEach(car => {
        car.goForward();
      });
    }
  }
}
