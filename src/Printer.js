import OutputView from './view/OutputView.js';

class Printer {
  // 실행 결과 출력
  static printRacingResult(results) {
    results.forEach((result) => {
      const { name, position } = result;
      const raceResult = '-'.repeat(position);

      OutputView.print(`${name} : ${raceResult}`);
    });

    OutputView.print('');
  }

  //   // 최종 우승자 출력
  static printWinner(results) {
    const winner = results.map((result) => result.name).join(', ');

    OutputView.print(`최종 우승자: ${winner}`);
  }
}

export default Printer;
