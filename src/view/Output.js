import { SCORE_ICON } from "../constants/setting";

export default class Output {
  print(message) {
    console.log(message);
  }

  static error(errorMessage) {
    this.print(errorMessage);
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
