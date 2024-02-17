import { CONFIG, MESSAGE } from '../constants';
import getRandomNumber from '../utils/getRandomNumber';
import { OutputView } from '../view';

const race = {
  start(carList, turnCount) {
    OutputView.print(MESSAGE.RACE_RESULT);
    Array.from({ length: turnCount }).forEach(() => {
      this.moveCars(carList);
      OutputView.print();
    });
  },

  moveCars(carList) {
    carList.cars.forEach((car) => {
      if (this.canCarMove()) car.move();
      OutputView.printCarPosition(car.name, car.position);
    });
  },

  canCarMove() {
    const randomNumber = getRandomNumber();
    return randomNumber >= CONFIG.CAR_MOVING_CONDITION;
  },

  showWinner(carList) {
    const winners = carList.getWinner();
    OutputView.printWinners(winners);
  },
};

export default race;
