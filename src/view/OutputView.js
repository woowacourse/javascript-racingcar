const OutputView = {
  printWinners(winners) {
    console.log(`최종 우승자: ${winners.join(', ')}`);
  },

  printCarPosition(name, position) {
    const positionString = '-'.repeat(position);
    console.log(`${name} : ${positionString}`);
  },

  print(message = '') {
    console.log(message);
  },
};

export default OutputView;
