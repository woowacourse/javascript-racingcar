import { VIEW_MESSAGE, RULE } from "../constants/index.js";

export const printWinner = (getWinner) => {
  console.log(
    VIEW_MESSAGE.WINNER_RESULT + getWinner().join(`${RULE.CAR_NAME_SEPARATOR}`)
  );
};
