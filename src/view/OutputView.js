import { SystemMessage } from "../constants/SystemMessage.js";

export const OutputView = {
  printMessage(message) {
    console.log(message);
  },
  printError(error) {
    console.error(error.message);
  },
  printStringPosition(position) {
    return "-".repeat(position);
  },
  printRound(name, position) {
    const stringPosition = this.printStringPosition(position);
    console.log(`${name} : ${stringPosition}`);
  },
  printWinner(winner) {
    console.log(SystemMessage.WINNER_MESSAGE(winner));
  },
};
