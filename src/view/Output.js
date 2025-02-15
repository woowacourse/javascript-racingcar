import { SCORE_ICON } from "../constants/setting.js";
import { OUTPUT_MESSAGE } from "../constants/message.js";

export default class Output {
  static newLine() {
    console.log("");
  }

  static print(message) {
    console.log(message);
  }

  static error(errorMessage) {
    throw new Error(errorMessage);
  }

  static scoreByRace(carName, carPositions) {
    this.print(`${carName} : ${SCORE_ICON.repeat(carPositions)}`);
  }

  static raceResult() {
    this.print(OUTPUT_MESSAGE.raceResult);
  }

  static winners(names) {
    this.print(`${OUTPUT_MESSAGE.winners} ${names.join(", ")}`);
  }
}
