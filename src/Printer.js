import OutputView from './view/OutputView.js';
import IOMessage from './constants/IOMessage.js';

class Printer {
  static printHeader(message) {
    OutputView.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = '-'.repeat(position);

      OutputView.print(IOMessage.getRaceResult(name, raceResult));
    });

    OutputView.print('');
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(', ');

    OutputView.print(IOMessage.getWinner(winner));
  }
}

export default Printer;
