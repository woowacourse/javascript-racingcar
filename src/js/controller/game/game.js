import { setResultArea } from "../../view/resultViewControl.js";
import { showWinnerAndRestartButton } from "../../view/viewControl.js";
import { setWinnerText } from "../../view/winnerViewControl.js";

export default class Game {
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

  static getResult(cars, racingCount) {
    Game.startGame(cars, racingCount);
    cars.sortCars();
  }

  static setResult(cars) {
    setResultArea(cars);
    showWinnerAndRestartButton();
    setWinnerText(Game.getWinners(cars));
  }
}
