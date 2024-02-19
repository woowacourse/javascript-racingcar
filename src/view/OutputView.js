import { CONSOLE_MESSAGE } from "../constants/message.js";
import { printMessage } from "../utils/console.js";

export default class OutputView {
  static printBlankLine() {
    printMessage("");
  }

  static printResultIntro() {
    printMessage(CONSOLE_MESSAGE.resultIntro);
  }

  static printMileageBoard(mileageBoard) {
    mileageBoard.forEach(({ name, mileage }) => {
      printMessage(CONSOLE_MESSAGE.mileageBoardForm(name, mileage));
    });
  }

  static printWinners(winners) {
    printMessage(CONSOLE_MESSAGE.winnersForm(winners));
  }
}
