import {
  createEachLog,
  initializeRacingResultView,
} from "../view/resultView.js";
import {
  setRacingWinnerView,
  showWinnerAndRestartButton,
} from "../view/winnerView.js";

export default class GameManager {
  race(carManager, racingCount) {
    let count = 0;
    const turns = setInterval(() => {
      count += 1;
      this.turn(carManager);

      if (count === racingCount) {
        clearInterval(turns);
      }
    }, 1000);

    this.raceOver(carManager, racingCount);
  }

  turn(carManager) {
    carManager.cars.forEach(car => {
      if (car.advance()) {
        createEachLog(car);
      }
    });
  }

  raceOver(carManager, racingCount) {
    setTimeout(() => {
      setRacingWinnerView(this.getWinners(carManager));
      showWinnerAndRestartButton();
    }, (racingCount + 1) * 1000);
  }

  getWinners(carManager) {
    const winnerScore = carManager.sortCars()[0].location;
    const winners = [];

    carManager.cars.forEach(car => {
      if (car.location === winnerScore) {
        winners.push(car.name);
      }
    });

    return winners;
  }

  startGame(carManager, racingCount) {
    initializeRacingResultView(carManager);
    this.race(carManager, racingCount);
  }
}
