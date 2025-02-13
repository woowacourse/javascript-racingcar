class OutputView {
  static printEachResult(carName, position) {
    const positionString = '-'.repeat(position);

    console.log(`${carName} : ${positionString}`);
  }

  static printMessage(message) {
    console.log(message);
  }

  static printWinner(winners) {
    console.log(`최종 우승자: ${winners.join(', ')}`);
  }
}

export default OutputView;
