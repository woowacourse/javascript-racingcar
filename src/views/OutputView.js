class OutputView {
  static roundResult(name, position) {
    console.log(`${name} : ${'-'.repeat(position)}`);
  }

  static break() {
    console.log();
  }

  static gameResult(winnerNames) {
    const winnerMessge = winnerNames.join(', ');
    const resultMessage = `최종 우승자: ${winnerMessge}`;
    console.log(resultMessage);
  }
}

export default OutputView;
