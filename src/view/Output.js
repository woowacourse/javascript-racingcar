import { SCORE_ICON } from "../constants/setting.js";

export default class Output {
  static print(message) {
    console.log(message);
  }

  static error(errorMessage) {
    throw new Error(errorMessage);
  }

  static scoreByRace(car) {
    this.print(`pobi : ${SCORE_ICON}`);
  }

  static raceResult() {
    this.print(OUTPUT_MESSAGE.raceResult);
  }

  static winners(names) {
    this.print(`${OUTPUT_MESSAGE.winners} ${names.join(",")}`);
  }
}
