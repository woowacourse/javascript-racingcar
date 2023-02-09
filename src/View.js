import Console from './utils/Console.js';
import { MESSAGE } from './constants';

const View = {
  naming() {
    Console.print(MESSAGE.naming);
  },
  tryCount() {
    Console.print(MESSAGE.tryCount);
  },
  resultTitle() {
    Console.print(MESSAGE.resultTitle);
  },
  carProgress(cars) {
    cars.forEach((car) => {
      Console.print(MESSAGE.carProgress(car));
    });
    View.newLine();
  },
  winner(winnerList) {
    Console.print(MESSAGE.winner(winnerList));
  },
  newLine() {
    Console.print(MESSAGE.blank);
  },
  error(e) {
    Console.print(e.message);
  },
};

export default View;
