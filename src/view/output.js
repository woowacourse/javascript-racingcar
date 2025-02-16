import { VIEW_MESSAGE } from "../constants/messages/view.js";
import { CAR_RULES } from "../constants/rules/car.js";

export const printWinner = (winners) => {
  console.log(
    VIEW_MESSAGE.WINNER_RESULT + winners.join(`${CAR_RULES.NAME_SEPARATOR} `)
  );
};

export const printExecutionText = () => {
  console.log(VIEW_MESSAGE.EXECUTION_RESULT);
};

export const printRaceResult = (raceResults) => {
  raceResults.forEach((result) => console.log(result));
};
