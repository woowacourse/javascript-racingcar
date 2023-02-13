import Console from '../utils/Console.js';
import { VIEW_MESSAGE } from '../constants/index.js';

const OutputView = {
  naming() {
    Console.print(VIEW_MESSAGE.naming);
  },
  tryCount() {
    Console.print(VIEW_MESSAGE.tryCount);
  },
  resultTitle() {
    Console.print(VIEW_MESSAGE.resultTitle);
  },
  carProgress(cars) {
    cars.forEach((car) => {
      Console.print(VIEW_MESSAGE.carProgress(car));
    });
    OutputView.newLine();
  },
  winner(winnerList) {
    Console.print(VIEW_MESSAGE.winner(winnerList));
  },
  newLine() {
    Console.print(VIEW_MESSAGE.blank);
  },
  error(e) {
    Console.print(e.message);
  },
};

export default OutputView;
