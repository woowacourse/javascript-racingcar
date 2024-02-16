import MESSAGE from "../constants/Message.js";

class OutputView {
  static printError(error) {
    console.log(error.message);
  }

  static printCar(car) {
    console.log(MESSAGE.printCarInfo(car));
  }

  static printQuery(string) {
    console.log(string);
  }

  static printAttemptTitle() {
    console.log(MESSAGE.printAttemptTitle);
  }

  static printChampions(names) {
    console.log(`${MESSAGE.printChampionTitle}: ${names}`);
  }

  static printNewLine() {
    console.log("");
  }
}

export default OutputView;
