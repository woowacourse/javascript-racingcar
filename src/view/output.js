import { VIEW_MESSAGE, RULE } from "../constants/index.js";

export const printWinner = (winners) => {
  console.log(
    VIEW_MESSAGE.WINNER_RESULT + winners.join(`${RULE.CAR_NAME_SEPARATOR} `)
  );
};

export const printExecutionText = () => {
  console.log(VIEW_MESSAGE.EXECUTION_RESULT);
};

export const printRaceResult = (raceResults) => {
  raceResults.forEach((result) => console.log(result));
};
