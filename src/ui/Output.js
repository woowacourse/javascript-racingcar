class Output {
  printCarPosition(car) {
    let positionStick = `${car.raceCarName} : `;
    for (let i = 0; i < car.position; i++) {
      positionStick += "-";
    }
    console.log(positionStick);
  }

  printWinnerList(winnerList) {
    console.log(`최종 우승자: ${winnerList.join(", ")}`);
  }

  printLine(message) {
    console.log(message);
  }
}

export default Output;
