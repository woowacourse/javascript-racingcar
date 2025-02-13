import OutputView from './view/OutputView.js';

class Printer {
  static printHeader(message) {
    OutputView.print(message);
  }

  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = '-'.repeat(position);

      OutputView.print(`${name} : ${raceResult}`);
    });

    OutputView.print('');
  }

  static printWinner(results) {
    const winner = results.map((result) => result.name).join(', ');

    OutputView.print(`최종 우승자: ${winner}`);
  }
}

export default Printer;
