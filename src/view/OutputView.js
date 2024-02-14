class OutputView {
  roundResult(carNamesMap) {
    carNamesMap.forEach((carName) => {
      console.log(`${carName.getCarName()} : ${'-'.repeat(carName.getAdvance())}`);
    });
  }
}

export default OutputView;
