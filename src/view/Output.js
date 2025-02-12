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

  static winners(names) {
    this.print(`최종 우승자: ${names.join(",")}`);
  }
}
