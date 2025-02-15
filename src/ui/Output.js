class Output {
  printCarPosition(car) {
    console.log(`${car.raceCarName}: ${"-".repeat(car.position)}`);
  }

  printWinnerList(winnerList) {
    console.log(`최종 우승자: ${winnerList.join(", ")}`);
  }

  printLine(message) {
    console.log(message);
  }
}

export default Output;
