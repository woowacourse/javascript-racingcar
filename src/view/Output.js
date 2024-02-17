import { numberMoveSuccess } from "../util/numberMoveSuccess.js";
import { MESSAGES } from "../constant/index.js";
class Output {
  static printMove(carInfo, round) {
    console.log(
      carInfo.carName +
        " : " +
        "-".repeat(numberMoveSuccess(carInfo.moveTrace.slice(0, round)))
    );
  }

  static printWinner(winner) {
    const finalWinner = winner.join(", ");
    console.log(MESSAGES.WINNER + finalWinner);
  }
}

export default Output;
