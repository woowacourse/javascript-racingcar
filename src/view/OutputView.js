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
};

export default OutputView;
