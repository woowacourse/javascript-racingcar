const OutputView = {
  printError(error) {
    console.log(error.message);
  },

  printEachStepResult(cars) {
    console.log(cars.getEachStepString());
  },

  printResultTitle() {
    console.log('\n실행 결과');
  },

  printWinner(winners = []) {
    const winnerString = winners.reduce((pre, cur) => {
      if (pre === '최종 우승자: ') {
        return pre + cur;
      }
      return `${pre}, ${cur}`;
    }, '최종 우승자: ');
    console.log(winnerString);
  },
};

export default OutputView;
