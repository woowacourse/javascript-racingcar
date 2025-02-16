export default class Output {
  static SCORE_ICON = "-";
  static OUTPUT_MESSAGE = {
    raceResult: "실행 결과",
    winners: "최종 우승자:",
  };

  static newLine() {
    console.log("");
  }

  static print(message) {
    console.log(message);
  }

  static scoreByRace(carName, carPositions) {
    this.print(`${carName} : ${Output.SCORE_ICON.repeat(carPositions)}`);
  }

  static raceResult() {
    this.print(Output.OUTPUT_MESSAGE.raceResult);
  }

  static winners(names) {
    this.print(`${Output.OUTPUT_MESSAGE.winners} ${names.join(", ")}`);
  }
}
