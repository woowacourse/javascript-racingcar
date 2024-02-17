import { OutputView } from '../view';

const raceWinnerController = {
  showWinner(carList) {
    const maxPosition = Math.max(...carList.map((car) => car.position));
    const winners = this.getWinner(carList, maxPosition);
    OutputView.printWinners(winners);
  },

  getWinner(carList, maxPosition) {
    const winners = carList.filter((car) => car.isMaxPosition(maxPosition));
    return winners.map((car) => car.name);
  },
};

export default raceWinnerController;
