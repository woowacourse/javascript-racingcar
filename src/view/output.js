import { VIEW_MESSAGE } from "../constants/message/view.js";
import { CAR_RULE } from "../constants/rule/car.js";
import { formatRacingResult } from "../utils/format.js";

export const printWinner = (winners) => {
  console.log(
    VIEW_MESSAGE.WINNER_RESULT + winners.join(`${CAR_RULE.NAME_SEPARATOR} `)
  );
};

export const printExecutionText = () => {
  console.log("\n" + VIEW_MESSAGE.EXECUTION_RESULT);
};

export const printRaceResult = (raceResults) => {
  raceResults.forEach((result) => {
    const racingResultText = result.reduce((acc, [carName, info]) => {
      acc += formatRacingResult(carName, info.distance);
      return acc;
    }, "");

    console.log(racingResultText);
  });
};
