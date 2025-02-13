class Output {
  printResult(cars) {
    console.log("실행 결과\n");
    this.printCarPosition(cars);
  }

  printCarPosition(car) {
    let positionStick = `${car.name} : `;
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
