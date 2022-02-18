import {
  createEachLog,
  hideLoading,
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

  celebrate(winners) {
    setTimeout(() => {
      alert(`${winners.join(", ")}(이)가 우승했습니다. 축하합니다 🎉!`);
    }, 2000);
  }

  raceOver(carManager, racingCount) {
    setTimeout(() => {
      const winners = this.getWinners(carManager);

      hideLoading();
      setRacingWinnerView(winners);
      showWinnerAndRestartButton();
      this.celebrate(winners);
    }, (racingCount + 1) * 1000);
  }

  startGame(carManager, racingCount) {
    initializeRacingResultView(carManager);
    this.race(carManager, racingCount);
  }
}
