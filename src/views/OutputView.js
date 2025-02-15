class OutputView {
  static roundResult(name, position) {
    console.log(`${name} : ${'-'.repeat(position)}`);
  }

  static break() {
    console.log();
  }

  static gameResult(winnerNames) {
    const winnerMessage = winnerNames.join(', ');
    const resultMessage = `최종 우승자: ${winnerMessage}`;
    console.log(resultMessage);
  }
}

export default OutputView;
