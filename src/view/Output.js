class Output {
  printRace(raceRecord, raceCount) {
    for (let i = 1; i <= raceCount; i++) {
      console.log(raceRecord.toStringStep(i));
      console.log();
    }
  }

  printWinnerList(winnerList) {
    console.log(`최종 우승자: ${winnerList.join(", ")}`);
  }

  printLine(message) {
    console.log(message);
  }
}

export default Output;
