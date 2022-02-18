import { setResultArea } from "../view/resultViewControl.js";
import { showWinnerAndRestartButton } from "../view/viewControl.js";
import { setWinnerText } from "../view/winnerViewControl.js";

// TODO : 전반적인 게임을 관리
export default class GameManager {
  startGame(carManager, racingCount) {
    for (let index = 0; index < racingCount; index++) {
      carManager.cars.forEach(car => {
        car.advance();
      });
    }
  }

  getWinners(carManager) {
    const max = carManager.cars[0].location;
    const winners = [];

    carManager.cars.forEach(car => {
      if (car.location === max) {
        winners.push(car.name);
      }
    });

    return winners;
  }

  getResult(carManager, racingCount) {
    this.startGame(carManager, racingCount);
    carManager.sortCars();
  }

  setResult(carManager) {
    setResultArea(carManager);
    showWinnerAndRestartButton();
    setWinnerText(this.getWinners(carManager));
  }
}
