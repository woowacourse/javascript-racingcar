class OutputView {
  static printOneGame(nameList, cars) {
    for (let i = 0; i < nameList.length; i += 1) {
      const carOutput = '-'.repeat(cars[i].position);
      console.log(`${nameList[i]} : ${carOutput}`);
    }
    console.log('');
  }

  static printAllGame(roundResultList, nameList) {
    roundResultList.forEach(roundResult => {
      OutputView.printOneGame(nameList, roundResult);
    });
  }

  static printGameStart() {
    console.log('\n실행 결과');
  }

  static printWinners(winnerOutput) {
    console.log(`최종 우승자: ${winnerOutput}`);
  }
}

export default OutputView;
