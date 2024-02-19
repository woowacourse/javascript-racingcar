import { OutputView } from '../view';

const raceWinnerController = {
  showWinner(carList, maxPosition) {
    const winners = this.getWinner(carList, maxPosition);
    OutputView.printWinners(winners);
  },

  getWinner(carList, maxPosition) {
    const winners = carList.filter((car) => car.isMaxPosition(maxPosition));
    return winners.map((winner) => winner.name);
  },
};

export default raceWinnerController;
