import { count } from "../util/count.js";
class Output {
  static printMove(carInfo, round) {
    console.log(
      carInfo.carName +
        " : " +
        "-".repeat(count(carInfo.moveTrace.slice(0, round)))
    );
  }

  static printWinner(winner) {
    const finalWinner = winner.join(", ");
    console.log("최종 우승자: " + finalWinner);
  }
}

export default Output;
