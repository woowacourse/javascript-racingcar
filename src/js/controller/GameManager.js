import { setResultArea, setWinnerText } from "../view/resultView.js";
import { showWinnerAndRestartButton } from "../view/initialView.js";

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
