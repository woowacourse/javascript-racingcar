import { OUTPUT_PROMPT_MESSAGE } from "../constants/constants.js";
import Console from "../utils/Console.js";

const Output = {
  printRaceStart() {
    Console.print(OUTPUT_PROMPT_MESSAGE.RACE_RESULT);
  },
  printRace(name, count) {
    const EXPRESSION_FLAG = "-";
    Console.print(`${name} : ${EXPRESSION_FLAG.repeat(count)}`);
  },
  printWinners(winners) {
    Console.print(`${OUTPUT_PROMPT_MESSAGE.FINAL_WINNERS}: ${winners.join(", ")}`);
  },
};

export default Output;
