class Output {
  static printMove(carInfo) {
    console.log(carInfo.carName + " : " + "-".repeat(carInfo.moveCount));
  }

  static printWinner(winner) {
    const finalWinner = winner.join(", ");
    console.log("최종 우승자: " + finalWinner);
  }
}

export default Output;
