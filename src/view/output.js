import { VIEW_MESSAGE } from "../constants/message/view.js";
import { CAR_RULE } from "../constants/rule/car.js";

export const printWinner = (winners) => {
  console.log(
    VIEW_MESSAGE.WINNER_RESULT + winners.join(`${CAR_RULE.NAME_SEPARATOR}`)
  );
};

export const printExecutionText = () => {
  console.log("\n" + VIEW_MESSAGE.EXECUTION_RESULT);
};

export const printRaceResult = (raceResults) => {
  raceResults.forEach((result) => console.log(result));
};
