import { setResultArea } from "../../view/resultViewControl.js";
import { showWinnerAndRestartButton } from "../../view/viewControl.js";
import { setWinnerText } from "../../view/winnerViewControl.js";

export const game = {
  startGame: (cars, racingCount) => {
    const carList = cars.getCars();
    for (let i = 0; i < racingCount; i++) {
      carList.forEach(car => {
        car.goForward();
      });
    }
    cars.setCars(carList);
  },

  getWinners: cars => {
    const carList = cars.getCars();
    const winners = [];
    const maxLocation = Math.max(...carList.map(car => car.location));

    carList.forEach(car => {
      const { name, location } = car;
      if (location === maxLocation) {
        winners.push(name);
      }
    });

    return winners;
  },

  getResult: (cars, racingCount) => {
    game.startGame(cars, racingCount);
  },

  setResult: cars => {
    setResultArea(cars);
    showWinnerAndRestartButton();
    setWinnerText(game.getWinners(cars));
  },
};
