const OutputView = {
  print(message) {
    console.log(message);
  },

  printErrorMessage(error) {
    this.print(error);
  },

  printCurrentResultTitle() {
    this.print('\n실행 결과');
  },

  printCurrentLocation(carInfos) {
    carInfos.forEach(({ name, location }) => {
      this.print(`${name} : ${'-'.repeat(location)}`);
    });
    this.print('');
  },

  printWinners(winners) {
    const result = winners.join(', ');
    this.print(`최종 우승자: ${result}`);
  },
};

export default OutputView;
