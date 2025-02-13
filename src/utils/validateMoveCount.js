import { ERROR } from "../constants/messages";

export function validateMoveCount(moveCount) {
  const regex = /^(?:[1-9]\d*)$/;

  if (!regex.test(moveCount)) {
    throw new Error(ERROR.INVALID_NUMBER);
  }

  return Number(moveCount);
}
