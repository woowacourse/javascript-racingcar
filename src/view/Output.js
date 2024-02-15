class Output {
  static roundResult(carNamesMap) {
    carNamesMap.forEach((carName) => {
      console.log(`${carName.getName()} : ${'-'.repeat(carName.getAdvance())}`);
    });
  }

  static winnerResult(winnerCarNamesMap) {
    console.log(`최종 우승자: ${winnerCarNamesMap.map((carName) => carName.getName()).join(', ')}`);
  }
}

export default Output;
