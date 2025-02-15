class Output {
  carPosition(car) {
    let positionStick = `${car.raceCarName} : `;
    for (let i = 0; i < car.position; i++) {
      positionStick += "-";
    }
    return positionStick;
  }

  printResult(moveResult, winnerList) {
    console.log(moveResult + `최종 우승자: ${winnerList.join(", ")}`);
  }

  printLine(message) {
    console.log(message);
  }
}

export default Output;
