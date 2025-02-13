class OutputView {
  static printEachResult(carName, position) {
    const positionString = '-'.repeat(position);

    console.log(`${carName} : ${positionString}`);
  }

  static printMessage(message) {
    console.log(message);
  }
}

export default OutputView;
