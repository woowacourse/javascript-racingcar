import { setResultArea } from "../../view/resultViewControl.js";
import { showWinnerAndRestartButton } from "../../view/viewControl.js";
import { setWinnerText } from "../../view/winnerViewControl.js";

// TODO : 전반적인 게임을 관리
export default class Game {
  static startGame(carManager, racingCount) {
    for (let index = 0; index < racingCount; index++) {
      carManager.cars.forEach(car => {
        car.advance();
      });
    }
  }

  static getWinners(carManager) {
    const max = carManager.cars[0].location;
    const winners = [];

    carManager.cars.forEach(car => {
      if (car.location === max) {
        winners.push(car.name);
      }
    });

    return winners;
  }

  static getResult(carManager, racingCount) {
    Game.startGame(carManager, racingCount);
    carManager.sortCars();
  }

  static setResult(carManager) {
    setResultArea(carManager);
    showWinnerAndRestartButton();
    setWinnerText(Game.getWinners(carManager));
  }
}
