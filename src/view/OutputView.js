class OutputView {
  static printEachResult(carName, position) {
    const positionString = '-'.repeat(position);

    console.log(`${carName} : ${positionString}`);
  }

  static printResultStartMessage() {
    console.log('\n실행 결과');
  }

  static printEmptyLine() {
    console.log('');
  }

  static printWinner(winnerNames) {
    console.log(`최종 우승자: ${winnerNames.join(', ')}`);
  }
}

export default OutputView;
