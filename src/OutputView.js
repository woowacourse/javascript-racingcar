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
};

export default OutputView;
