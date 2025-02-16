class OutputView {
  static roundResult(name, position) {
    console.log(`${name} : ${'-'.repeat(position)}`);
  }

  static printInput(input) {
    console.log(input);
  }

  static gameResult(winnerNames) {
    const winnerMessage = winnerNames.join(', ');
    const resultMessage = `최종 우승자: ${winnerMessage}`;
    console.log(resultMessage);
  }
}

export default OutputView;
