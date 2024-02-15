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

  static newLine() {
    console.log("");
  }
}

export default OutputView;
