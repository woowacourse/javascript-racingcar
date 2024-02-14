import { print } from "../utils/ConsoleUtil.js";

export default OutputView = {
  printResultIntro() {
    print("실행 결과");
  },

  printMileageBoard(mileageBoard) {
    mileageBoard.forEach(({ name, mileage }) => {
      print(`${name}: ${"-".repeat(mileage)}`);
    });
  },

  printWinner(winner) {
    print(`최종 우승자: ${winner.join(", ")}`);
  },
};
