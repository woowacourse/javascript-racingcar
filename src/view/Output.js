import { count } from "../util/count.js";
import { MESSAGES } from "../constant/constant.js";
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
    console.log(MESSAGES.WINNER + finalWinner);
  }
}

export default Output;
