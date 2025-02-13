import { OUTPUT_PROMPT_MESSAGE, EXPRESSION_FLAG } from "../constants/constants.js";
import Console from "../utils/Console.js";

const Output = {
  printRaceStart() {
    Console.print(OUTPUT_PROMPT_MESSAGE.RACE_RESULT);
  },
  printRace(name, count) {
    Console.print(`${name} : ${EXPRESSION_FLAG.repeat(count)}`);
  },
  printWinner(winners) {
    Console.print(`${OUTPUT_PROMPT_MESSAGE.FINAL_WINNERS}: ${winners.join(", ")}`);
  },
};

export default Output;
